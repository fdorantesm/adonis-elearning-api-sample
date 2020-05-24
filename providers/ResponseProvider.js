const { ServiceProvider } = require('@adonisjs/fold')
const HttpStatus = require('http-status-codes')
const Errors = require('../app/Errors')
const get = require('lodash/get')

class MyServiceProvider extends ServiceProvider {
  boot () {
    const Response = use('Adonis/Src/Response')
    Response.macro('default', function (data = {}, status = HttpStatus.OK) {
      this.status(status).send({ data, statusMessage: HttpStatus.getStatusText(status), statusCode: status })
    })
    Response.macro('error', function (code, errors = [], status = HttpStatus.BAD_REQUEST) {
      const defaultError = 'api.generic_error'
      let [type, key] = code.split('.')
      let isSql

      if (type && !key) {
        [type, key] = ['sql', type]
        code = [type, key].join('.')
      }
      
      if (!get(Errors, code)) {
        [type, key] = defaultError.split('.')
      }
      
      const errorCode = `${type}.${key}`
      const apiError = get(Errors, errorCode)

      let requestError = { ...apiError, error_code: errorCode }
            
      if (errors instanceof Error) {
        isSql = !!errors.sql
        requestError = { ...requestError, ...Errors[type][key], error_code: errorCode }
        // try {
        //   requestError = { ...requestError, ...Errors[isSql ? 'api' : type][isSql ? 'generic_error' : key], error_code: isSql ? defaultError : errorCode }
        // } catch {
        //   requestError = { ...requestError, ...Errors.api.generic_error, error_code: defaultError }
        // }
        if (isSql) {
          requestError.error_code = defaultError
          // console.log('ResponseProvider::', errors)
        }
      } else if (Array.isArray(errors)) {
        requestError = { ...requestError, ...Errors[type][key], errors }
      }
      status = requestError.status || status
      this.status(status).send(requestError)
    })
  }
}

module.exports = MyServiceProvider
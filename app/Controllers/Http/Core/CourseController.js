'use strict'

class CourseController {
  async index ({ request, response }) {
    return response.send(request.all())
  }
  async show ({ request, response, params }) {
    return {
      id: params.id
    }
  }
}

module.exports = CourseController

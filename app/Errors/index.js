const glob = require('glob')
const path = require('path')

const errors = {};

/**
 * Load subrouters and log each route into file
 */
glob.sync(path.join(__dirname, '*.js')).forEach((file) => {
  if (file !== __filename) {
    const base = path.basename(file).replace('.js', '');
    errors[base] = require(path.join(__dirname, base));
  }
});

module.exports = errors
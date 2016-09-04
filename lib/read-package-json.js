const fs = require('fs')

module.exports = function (sourceDir) {
  return JSON.parse(fs.readFileSync('./package.json'))
}

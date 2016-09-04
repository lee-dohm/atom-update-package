const fs = require('fs')

module.exports = function (metadata) {
  let text = JSON.stringify(metadata, null, 2)
  fs.writeFileSync('./package.json', text)
}

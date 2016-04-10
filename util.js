var fs = require('fs')

module.exports = {}

// Public functions



// Private functions

function _openFile (filename, callback) {
  fs.readFile(filename, function (err, data) {
    if (err) return callback(err)
    callback(err, data.toString())
  })
}

function _saveFile (filename, data, callback) {
  fs.writeFile(filename, data, function (err) {
    if (err) console.log(err)
    callback(err)
  })
}
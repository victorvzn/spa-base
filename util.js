var fs = require('fs')

module.exports = {
  fetchAll: fetchAll
}

// Public functions

function fetchAll (fn) {
  _openFile('./data/fake.json', function (err, data) {
    data = data || "[]"
    fn(err, JSON.parse(data))
  })
}

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
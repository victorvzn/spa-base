var fs = require('fs')

module.exports = {
  fetchAll: fetchAll,
  fetchOne: fetchOne
}

// Public functions

function fetchAll (fn) {
  _openFile('./data/fake.json', function (err, data) {
    data = data || "[]"
    fn(err, JSON.parse(data))
  })
}

function fetchOne (objectId, fn) {
  _openFile('./data/fake.json', function (err, data) {
    var objectsJSON,
        objectIndex
    data = data || "[]"
    objectsJSON = JSON.parse(data)
    objectIndex = objectsJSON.map(function(el) {return el.id }).indexOf(objectId)
    console.log(objectIndex)
    fn(err, objectsJSON[objectIndex] || {})
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
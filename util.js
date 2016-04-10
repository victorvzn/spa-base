var fs = require('fs')

module.exports = {
  fetchAll: fetchAll,
  fetchOne: fetchOne,
  saveOne: saveOne,
  updateOne: updateOne,
  removeOne: removeOne,
  markAll: markAll
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
    fn(err, objectsJSON[objectIndex] || {})
  })
}

function saveOne (objJSON, fn) {
  _openFile('./data/fake.json', function (err, data) {
    var uuid = require('node-uuid')
    var objectsJSON
    data = data || "[]"
    objectsJSON = JSON.parse(data)
    objJSON.id = uuid.v1()
    objectsJSON.push(objJSON)
    _saveFile('./data/fake.json', JSON.stringify(objectsJSON, null, 2), function (err) {
      fn(err, objJSON)
    })
  })
}

function updateOne (newObjJSON, fn) {
  _openFile('./data/fake.json', function (err, data) {
    var objectsJSON, 
        objectId,
        objectIndex
    data = data || "[]"
    objectsJSON = JSON.parse(data)
    objectId = newObjJSON.id
    objectIndex = objectsJSON.map(function(el) {return el.id }).indexOf(objectId)
    if(objectIndex > -1) {
      
      objectsJSON[objectIndex].title = newObjJSON.title ? newObjJSON.title : objectsJSON[objectIndex].title
      objectsJSON[objectIndex].active = newObjJSON.active ? newObjJSON.active : objectsJSON[objectIndex].active

      _saveFile('./data/fake.json', JSON.stringify(objectsJSON, null, 2), function (err) {
        fn(err, objectsJSON[objectIndex])
      })
    } else {
      fn(err, {success: false})
    }
    //console.log("NOJ", newObjJSON)
    //console.log("ID", objectId)
    //console.log("INDEX", objectIndex)
  })
}

function removeOne (objectId, fn) {
  _openFile('./data/fake.json', function (err, data) {
    var objectsJSON,
        objectIndex,
        removedObject
    data = data || "[]"
    objectsJSON = JSON.parse(data)
    objectIndex = objectsJSON.map(function(el) {return el.id }).indexOf(objectId)
    if(objectIndex > -1) {
      removedObject = objectsJSON.splice(objectIndex, 1)
      _saveFile('./data/fake.json', JSON.stringify(objectsJSON, null, 2), function (err) {
        fn(err, removedObject)
      })
    } else {
      fn(err, {success: false})
    }
  })
}

function markAll (objJSON, fn) {
  _openFile('./data/fake.json', function (err, data) {
    var objectsJSON
    data = data || "[]"
    objectsJSON = JSON.parse(data)
    objectsJSON = objectsJSON.map(function(obj) { return { id: obj.id, title: obj.title, active: this.active} }, {active: objJSON.active})
    _saveFile('./data/fake.json', JSON.stringify(objectsJSON, null, 2), function (err) {
      fn(err, objectsJSON)
    })
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
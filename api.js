const express = require('express')
const pack = require('./package')
const util = require('./util')

const router = express.Router()

// GET /

router.get('/', (req, res) => {
  res.json({
    app: pack.name,
    port: "3000",
    version: pack.version,
    apiUrl: '/api',
    message: 'Welcome user'
  })
  console.log(' >', 'GET /api')
})

// GET /todos
router.get('/todos', (req, res) => {
  util.fetchAll(function (err, data) {
    if(err) return console.log(err)
    res.json(data)
    console.log(' > GET /api/todos', err)
  })
})

// GET /todos/:id
router.get('/todos/:id', (req, res) => {
  var id = req.params.id
  util.fetchOne(id, function (err, data) {
    if(err) return console.log(err)
    res.json(data)
    console.log(' > GET /api/todos/%s', id)
  })
})

// POST /todos
router.post('/todos', (req, res) => {
  var todo = {title: req.body.title, active: false}
  util.saveOne(todo, function (err, data) {
    if(err) return console.log(err)
    res.json(data)
    console.log(' > POST /api/todos')
  })
})

// PUT /todos/:id
router.put('/todos/:id', (req, res) => {
  var id = req.params.id
  var todo = {id: id, title: req.body.title, active: req.body.active}
  util.updateOne(todo, function (err, data) {
    if(err) return console.log(err)
    res.json(data)
    console.log(' > PUT /api/todos/%s', id)
  })
})

module.exports = router
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

module.exports = router
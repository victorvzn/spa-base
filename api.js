const express = require('express')
const pack = require('./package')

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

module.exports = router
const express = require('express')
const router = express.Router()

// GET Home page

router.get('/', function (req, res, next) {
  res.render('home', {title: 'Home'})
  console.log(' > GET /')
})

// GET Test page

router.get('/test', function (req, res, next) {
  res.render('test', {title: 'Test'})
  console.log(' > GET /test')
})

module.exports = router

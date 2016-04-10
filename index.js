'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const compress = require('compression')
const path = require('path')

const routes = require('./routes')
const api = require('./api')

const app = express()
const port = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(compress())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/', routes)
app.use('/api', api)

app.all('*', function (req, res, next) {
  res.render('home', {title: '404'})
  console.log(' > GET /404')
})

app.listen(port, function (err) {
  if (err) return err
  console.log('>', 'Server listening at *:' + port)
})

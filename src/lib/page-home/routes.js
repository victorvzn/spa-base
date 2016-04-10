var page = require('page')

var PageHome = require('./')

page('/', function (ctx, next) {
  PageHome.render()
  console.log('PAGE HOME LOADED')
})

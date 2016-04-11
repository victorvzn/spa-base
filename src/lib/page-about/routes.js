var page = require('page')

var PageAbout = require('./')

page('/about', function (ctx, next) {
  PageAbout.render()
  console.log('PAGE ABOUT LOADED')
})

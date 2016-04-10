var page = require('page')

var Page404 = require('./')

page('*', function (ctx, next) {
  Page404.render()
  require('src/lib/loading').hide()

  console.log('PAGE 404 LOADED')
})

var $ = require('jquery')
var page = require('page')

var $rootNode = require('src/lib/root-node')

var LayoutComponent = require('src/lib/layout')
var FooterComponent = require('src/lib/footer')

var template = require('./template.ejs')

function render () {
  $rootNode.html('')
  LayoutComponent.render()

  var $todoBody = $('#Layout').find('.Layout-body')
  var $todoFooter = $('#Layout').find('.Layout-footer')
  
  $todoBody.html(template)

  $todoBody
    .on('click', 'a', function(ev) {
      ev.preventDefault()
      console.log('Regresando a home')
      page('/')
    })

  $todoFooter.hide()

  FooterComponent.render()

  require('src/lib/loading').hide()
}

module.exports = {
  render: render
}
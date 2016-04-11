var $ = require('jquery')
var page = require('page')

var $rootNode = require('src/lib/root-node')

var template = require('./template.ejs')

function render () {
  $rootNode.append(template)

  $('#Footer-about').on('click', '.tohome', function (ev) {
    ev.preventDefault()
    page('/')
  })

  $('#Footer-about').on('click', '.toabout', function (ev) {
    ev.preventDefault()
    page('/about')
  })
}

module.exports = {
  render: render
}
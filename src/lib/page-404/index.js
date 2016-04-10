var $ = require('jquery')
var page = require('page')

var $rootNode = require('src/lib/root-node')

var template = require('./template.ejs')

function render () {
  var $page404Node

  $rootNode.html('')
  
  $rootNode.html(template)

  $page404Node = $('#Page404')
  
  $page404Node
    .find('a')
    .on('click', function (ev) {
      ev.preventDefault()
      page('/')
    })

}

module.exports = {
  render: render
}
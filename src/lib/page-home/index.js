var $ = require('jquery')
var page = require('page')

var $rootNode = require('src/lib/root-node')

var LayoutComponent = require('src/lib/layout')

function render () {
  $rootNode.html('')
  
  LayoutComponent.render()

  require('src/lib/loading').hide()
}

module.exports = {
  render: render
}
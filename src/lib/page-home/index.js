var $ = require('jquery')
var page = require('page')

var $rootNode = require('src/lib/root-node')

var LayoutComponent = require('src/lib/layout')
var TodoInputComponent = require('src/lib/todo-input')

function render () {
  $rootNode.html('')
  
  LayoutComponent.render()
  TodoInputComponent.render('#Layout', '.Layout-body')

  require('src/lib/loading').hide()
}

module.exports = {
  render: render
}
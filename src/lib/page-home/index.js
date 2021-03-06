var $ = require('jquery')
var page = require('page')

var $rootNode = require('src/lib/root-node')

var LayoutComponent = require('src/lib/layout')
var TodoInputComponent = require('src/lib/todo-input')
var TodoMarkAllComponent = require('src/lib/todo-mark-all')
var TodoListComponent = require('src/lib/todo-list')
var FooterComponent = require('src/lib/footer')

function render () {
  $rootNode.html('')
  
  LayoutComponent.render()
  TodoInputComponent.render('#Layout', '.Layout-body')
  TodoMarkAllComponent.render('#Layout', '.Layout-body')
  TodoListComponent.render()
  FooterComponent.render()

  require('src/lib/loading').hide()
}

module.exports = {
  render: render
}
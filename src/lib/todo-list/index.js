var $ = require('jquery')
var $rootNode = require('src/lib/root-node')
var TodoItemComponent = require('src/lib/todo-item')
var util = require('./util')
var template = require('./template.ejs')

module.exports = {
  render: render
}

function render () {
  var $Layout = $('#Layout')
  var $TodoList = null

  if (!$('#TodoList').length) {
    $Layout.find('.Layout-body').append(template)
  }
  
  $TodoList = $('#TodoList')

  util.getTodos(function(todos) {

    $todosArray = []
    todos.forEach(function (todo) {
      $todosArray.push(TodoItemComponent.render(todo))
    })

    $TodoList
      .html('')
      .html($todosArray)
  })
}
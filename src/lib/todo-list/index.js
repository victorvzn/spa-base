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
    var CountComponent = require('src/lib/todo-count')
    var TodoClearCompletedComponent = require('src/lib/todo-clear-completed')

    $todosArray = []
    todos.forEach(function (todo) {
      $todosArray.push(TodoItemComponent.render(todo))
    })

    $TodoList
      .html('')
      .html($todosArray)

    var counterTodosLeft = todos.filter(function (todo) {
      return todo.active.toString() === 'false'
    })

    var counterTodosCompleted = todos.filter(function (todo) {
      return todo.active.toString() === 'true'
    })

    CountComponent.render(counterTodosLeft.length)
    TodoClearCompletedComponent.render(counterTodosCompleted.length, counterTodosCompleted)
  })
}
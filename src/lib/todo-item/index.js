var $ = require('jquery')
var util = require('./util')
var template = require('./template.ejs')

module.exports = {
  render: render
}

function render (todo) {
  var $todoItem = $(template(todo))

  $todoItem
    .on('click', '.TodoItem-remove', function (ev) {
      ev.preventDefault()
      var $this = $(this)
      var TodoListComponent = require('src/lib/todo-list')
      var id = $this.closest(".TodoItem").data('id')
      util.removeTodos(id, function (data) {
        TodoListComponent.render()
      })
    })

  $todoItem
    .on('click', '.TodoItem-check input', function (ev) {
      ev.preventDefault()
      var $this = $(this)
      var TodoListComponent = require('src/lib/todo-list')
      var $parent = $this.closest(".TodoItem")
      var id = $parent.data('id')
      var checkValue = this.checked
      util.updateTodos(id, {active: checkValue}, function (data) {
        TodoListComponent.render()
      })
    })

  $todoItem
    .on('dblclick', '.TodoItem-label', function (ev) {
      ev.preventDefault()
      var $this = $(this)
      var $parent = $this.closest(".TodoItem")
      var $TodoList = $('#TodoList')
      $TodoList.find('.TodoItem-label').removeClass('is-editing')
      $parent.find('.TodoItem-label').toggleClass('is-editing')
      $parent.find('.TodoItem-label input').focus()
      $parent.find('.TodoItem-label input').select()
    })

  $todoItem
    .on('keyup', '.TodoItem-label input', function (ev) {
      ev.preventDefault()
      var $this = $(this)
      var TodoListComponent = require('src/lib/todo-list')
      var $parent = $this.closest(".TodoItem")
      if(ev.keyCode === 13) {
        var id = $parent.data('id')
        var todoJSON = {title: this.value}
        util.updateTodos(id, todoJSON, function (data) {
          $parent.find('.TodoItem-label span').text('')
          $parent.find('.TodoItem-label input').val('')
          $parent.find('.TodoItem-label').removeClass('is-editing')
          TodoListComponent.render()
        })
      }
      if(ev.keyCode === 27) {
        $parent.find('.TodoItem-label').removeClass('is-editing')
        TodoListComponent.render()
      }
    })
  
  return $todoItem
}

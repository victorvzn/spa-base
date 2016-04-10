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
  
  return $todoItem
}

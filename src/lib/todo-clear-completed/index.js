var $ = require('jquery')

var $rootNode = require('src/lib/root-node')

var template = require('./template.ejs')

function render (count_completed, count_completed_array) {
  var $Layout = $('#Layout')

  count_completed = count_completed || 0

  $Layout.find('.TodoClearCompleted').html(template({counter: count_completed}))

  $('#TodoClearCompleted').on('click', function (ev) {
    ev.preventDefault()
    var TodoListComponent = require('src/lib/todo-list')
    var TodoItemtUtil = require('src/lib/todo-item/util')
    var completedCounter = count_completed_array.length
    for (var i = 0; i < completedCounter; i++) {
      TodoItemtUtil.removeTodos(count_completed_array[i].id, function (data) {
        TodoListComponent.render()
      })
    }
  })
}

module.exports = {
  render: render
}
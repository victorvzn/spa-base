var $ = require('jquery')

module.exports = {
  markAllTodos: markAllTodos
}

function markAllTodos (data, fn) {
  $.ajax({
    method: 'POST',
    data: data,
    url: '/api/todos/markall',
    success: function(response) {
      fn(response)
    }
  })
}
var $ = require('jquery')

module.exports = {
  removeTodos: removeTodos,
  updateTodos: updateTodos
}

function removeTodos (id, fn) {
  $.ajax({
    method: 'DELETE',
    url: '/api/todos/' + id,
    success: function(response) {
      fn(response)
    }
  })
}

function updateTodos (id, data, fn) {
  $.ajax({
    method: 'PUT',
    data: data,
    url: '/api/todos/' + id,
    success: function(response) {
      fn(response)
    }
  })
}
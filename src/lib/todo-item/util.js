var $ = require('jquery')

module.exports = {
  removeTodos: removeTodos
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
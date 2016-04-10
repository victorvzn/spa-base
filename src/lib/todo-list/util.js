var $ = require('jquery')

module.exports = {
  getTodos: getTodos
}

function getTodos (fn) {
  $.ajax({
    method: 'GET',
    url: '/api/todos',
    success: function(response) {
      fn(response)
    }
  })
}

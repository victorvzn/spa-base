var $ = require('jquery')

function postTodo (data, fn) {
  $.ajax({
    method: 'POST',
    url: '/api/todos',
    data: data,
    success: function (response) {
      fn(response)
    }
  })
}

module.exports = {
  postTodo: postTodo
}
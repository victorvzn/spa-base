var $ = require('jquery')
var template = require('./template.ejs')

module.exports = {
  render: render
}

function render (todo) {
  var $todoItem = $(template(todo))
  
  return $todoItem
}

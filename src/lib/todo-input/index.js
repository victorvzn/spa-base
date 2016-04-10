var $ = require('jquery')
var util = require('./util')

var $rootNode = require('src/lib/root-node')
var TodoListComponent = require('src/lib/todo-list')

var template = require('./template.ejs')

function render (el, className) {
  $(el).find(className).append(template)

  $(el).find('input').on('keyup', function(ev) {
    ev.preventDefault()
    if(ev.keyCode === 13) {
      var inputValue = this.value
      var todoJSON = {title: inputValue}
      if(inputValue.length > 2) {
        util.postTodo(todoJSON, function (data) {
          TodoListComponent.render()
          this.value = ''
        }.bind(this))
      }
    }
  })
}

module.exports = {
  render: render
}
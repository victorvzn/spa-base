var $ = require('jquery')
var $rootNode = require('src/lib/root-node')
var TodoListComponent = require('src/lib/todo-list')
var template = require('./template.ejs')

module.exports = {
  render: render
}

function render (el, className) {
  $(el).find(className).append(template)

  $('#TodoMarkAll').on('click', 'button',function (ev) {
    ev.preventDefault()
    var util = require('./util')
    var checkValue
    if (this.className === 'TodoMarkAll-on') {
      checkValue = true
    } else {
      checkValue = false
    }
    util.markAllTodos({active: checkValue}, function (data) {
      TodoListComponent.render()
    })

  })
}

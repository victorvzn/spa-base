var $ = require('jquery')

var $rootNode = require('src/lib/root-node')

var template = require('./template.ejs')

function render () {
  $rootNode.append(template)

  $('#Footer-about').on('click', function (ev) {
    ev.preventDefault()
    alert('About page')
  })
}

module.exports = {
  render: render
}
var $ = require('jquery')

var $rootNode = require('src/lib/root-node')

var template = require('./template.ejs')

module.exports = {
  elId: elId,
  render: render
}

function elId() {
  return '#el'
}

function render () {
  $rootNode.append(template)
}
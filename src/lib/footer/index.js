var $ = require('jquery')

var $rootNode = require('src/lib/root-node')

var template = require('./template.ejs')

function render () {
  $rootNode.append(template)
}

module.exports = {
  render: render
}
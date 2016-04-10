var $ = require('jquery')
var page = require('page')

var $rootNode = require('src/lib/root-node')

function render () {
  $rootNode.html('')
  
  require('src/lib/loading').hide()
}

module.exports = {
  render: render
}
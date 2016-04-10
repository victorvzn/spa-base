var $ = require('jquery')

var $rootNode = require('src/lib/root-node')

var template = require('./template.ejs')

function render (count_left) {
  var $Layout = $('#Layout')

  count_left = count_left || 0

  $Layout.find('.TodoCount').html(template({counter: count_left}))
}

module.exports = {
  render: render
}
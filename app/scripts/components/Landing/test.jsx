(function() {
'use strict';
var React = require('react');

module.exports = new React.createClass({
  swion: function() {
    console.log('Ola');
  },
  render: function() {
    return (
      <div>
        <div id="bg"></div>
      </div>
    );
  }
})
;})();

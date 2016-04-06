(function(){
  'use strict';
  var React = require('react'),
  Block = require('essence-core').Block,
  ReactDom = require('react-dom');

  var Landing = React.createClass({
    render: function() {
      return (
        <div>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-6 e-h-end e-v-end'}>brick-6</Block>
            <Block classes={'brick brick-6 e-h-start e-v-end'}>brick-6</Block>
          </Block>
        </div>
      );
    }
  });
  module.exports = Landing;
})();

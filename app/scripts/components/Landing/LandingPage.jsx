(function(){
  'use strict';
  var React = require('react'),
  Block = require('essence-core').Block,
  Btn = require('essence-button'),
  AppBar = require('essence-appbar'),
  Dialog = require('./Dialog.jsx'),
  ReactDom = require('react-dom');

  var Landing = React.createClass({
    render: function() {
      return (
        <div>
        <div id ="back"></div>
        <div id="text">
          <Block classes={'e-row'}>
            <Block id="startcontent" classes={'brick brick-12 e-h-center e-v-center'}>
              <div>
                <h5>Trinity Baptist Church</h5>
              </div>
            </Block>
          </Block>
          <Block classes={'e-row'}>
            <Block id="startbtn" classes={'brick brick-12 e-h-center e-v-center'}>
              <Btn label={'Register'} ripple={false} type={'primary'} className={'raised'} />
              <Dialog />
            </Block>
          </Block>
        </div>
      </div>
      );
    }
  });
  module.exports = Landing;
})();

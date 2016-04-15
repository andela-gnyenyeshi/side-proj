(function(){
  'use strict';

  var Dialog = require('essence-dialog').Dialog,
  React = require('react'),
  Block = require('essence-core').Block,
  DialogHeader = require('essence-dialog').DialogHeader,
  Btn = require('essence-button'),
  DialogContent = require('essence-dialog').DialogContent,
  DialogFooter = require('essence-dialog').DialogFooter;

  module.exports = new React.createClass({
    getInitialState: function() {
      return {
        open: ''
      };
    },

    showDialog: function() {
      console.log('open dialog', this.state);
      var a = true;
      this.state.open = true;
      this.setState({
        open: a
      });
      console.log('should open', this.state);
    },

    hideDialog: function() {
      this.setState({
        open: false
      });
    },

    dialogOpened: function() {
      console.log('Dialog open');
    },

    dialogClosed: function() {
      console.log('Dialog close');
    },

    render: function() {
      return (
        <div>
          <Dialog dismissible={false} visible={this.state.open} onOpen={this.dialogOpened} onClose={this.dialogClosed}>
            <DialogHeader className={'e-text-right'}>
              <Btn icon={'navigation-close'} onClick={this.hideDialog} className={'flat e-background-white'} />
             </DialogHeader>

             <DialogContent>
              This is the Dialog content
             </DialogContent>

             <DialogFooter>
              <Btn type={'succes'} label={'OK'} className={'flat'} />
              <Btn type={'info'} label={'Cancel'} onClick={this.hideDialog} className={'flat'} />
             </DialogFooter>
          </Dialog>

          <Block classes={'e-row'}>
            <Block id="startbtn" classes={'brick brick-12 e-h-center e-v-center'}>
              <Btn label={'Register'} ripple={false} type={'primary'} className={'raised'} onClick={this.showDialog}/>
            </Block>
          </Block>

        </div>
      );
    }
  });
})();

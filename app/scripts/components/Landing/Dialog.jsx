(function(){
  'use strict';

  var Dialog = require('essence-dialog'),
  React = require('react'),
  DialogHeader = require('essence-dialog').DialogHeader,
  DialogContent = require('essence-dialog').DialogContent,
  DialogFooter = require('essence-dialog').DialogFooter;

  module.exports = new React.createClass({
    getInitialState: function() {
      return {
        open: ''
      };
    },

    showDialog: function() {
      this.setState({
        open: true
      });
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
      <div>
        <Dialog dismissible={false} visible={this.state.open} onOpen={this.dialogOpened.bind(this)} onClose={this.dialogClosed.bind(this)}>
          <DialogHeader className={'e-text-right'}>
            <Btn icon={'navigation-close'} onClick={this.hideDialog.bind(this)} className={'flat e-background-white'} />
           </DialogHeader>

           <DialogContent>
            This is the Dialog content
           </DialogContent>

           <DialogFooter>
            <Btn type={'succes'} label={'OK'} className={'flat'} />
            <Btn type={'info'} label={'Cancel'} onClick={this.hideDialog.bind(this)} className={'flat'} />
           </DialogFooter>
        </Dialog>
      </div>
    }
  });
})();

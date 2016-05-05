(function(){
  'use strict';

  var Dialog = require('essence-dialog').Dialog,
  React = require('react'),
  Block = require('essence-core').Block,
  DialogHeader = require('essence-dialog').DialogHeader,
  Btn = require('essence-button'),
  DialogContent = require('essence-dialog').DialogContent,
  DialogFooter = require('essence-dialog').DialogFooter,
  Input = require('essence-input'),
  MemberAction = require('../../actions/MemberActions');

  module.exports = new React.createClass({
    getInitialState: function() {
      return {
        open: '',
        name: ''
      };
    },

    showDialog: function() {
      var a = true;
      this.state.open = true;
      this.setState({
        open: a
      });
    },

    hideDialog: function() {
      this.setState({
        open: false
      });
    },

    fetchInputValues: function(event) {
      var value = event.target.value;
      this.setState({
        name: value
      });
    },

    // confirmAction: function() {
    //   MemberAction.confirmMember(this.state.name);
    // },

    render: function() {
      return (
        <div>
          <Dialog dismissible={false} visible={this.state.open} >
            <DialogHeader className={'e-text-right'}>
              <Btn icon={'navigation-close'} onClick={this.hideDialog} className={'flat e-background-white'} />
             </DialogHeader>

             <DialogContent>
              <h2 id="reg"> Please enter code given by admin: </h2>
              <Input classes={'has-success'} type={'text'} name={'label'} placeholder={'code'} onInput={this.fetchInputValues}/>
             </DialogContent>

             <DialogFooter>
              <Btn type={'succes'} label={'OK'} onClick={this.confirmAction} className={'flat'} />
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

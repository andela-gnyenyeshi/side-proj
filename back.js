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

  </div>
}

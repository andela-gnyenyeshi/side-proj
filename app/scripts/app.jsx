(function(){
  'use strict';
  var React = require('react'),
  ReactDOM = require('react-dom'),
  ReactRouter = require('react-router'),
  browserHistory = require('react-router').browserHistory,
  Landing = require('./components/Landing/Landing.jsx');

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Landing}>
        
      </Route>
    </Router>
  ), document.getElementById('ui'));
})();

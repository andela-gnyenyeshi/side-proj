(function(){
  'use strict';
  var React = require('react'),
  ReactDOM = require('react-dom'),
  ReactRouter = require('react-router'),
  Router = ReactRouter.Router,
  Redirect = ReactRouter.Redirect,
  Route = ReactRouter.Route,
  IndexRoute = ReactRouter.IndexRoute,
  browserHistory = require('react-router').browserHistory,
  Landing = require('./components/Landing/LandingPage.jsx');

  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Landing}>
      </Route>
    </Router>
  ), document.getElementById('ui'));
})();

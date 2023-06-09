import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/registration" component={RegistrationForm} />
      <Route path="/login" component={LoginForm} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

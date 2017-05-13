import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import './scss/global.scss';
import './scss/normalize.scss';
import './scss/simple-grid.scss';

import App from './components/App';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import Signup from './components/Signup';

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render((
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={NavigationBar} />
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </div>
    </Router>
  </Provider>
), document.getElementById('app'));﻿

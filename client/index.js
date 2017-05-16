import React from 'react';
import { render } from 'react-dom';

import './scss/global.scss';
import './scss/simple-grid.scss';
import './scss/normalize.scss';

import App from './components/App';
import NavigationBar from './components/NavigationBar';

render((
    <div>
      <NavigationBar />
      <App />
    </div>
), document.getElementById('app'));﻿

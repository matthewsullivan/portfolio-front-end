import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import Bowser from 'bowser';

import App from './App';
import Disabled from './components/elements/Disabled/Disabled';

import './index.css';

import * as serviceWorker from './serviceWorker';

const blacklist = ['Internet Explorer', 'Microsoft Edge'];
const browser = Bowser.getParser(window.navigator.userAgent);
const name = browser.getBrowserName();

let component = <App />;

if (blacklist.includes(name)) {
  const version = browser.getBrowserVersion();

  if (version < 16) {
    component = <Disabled />;
  }
}

ReactDOM.render(component, document.getElementById('root'));

serviceWorker.unregister();

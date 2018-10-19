/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { combineReducers } from 'redux';
import connection from './faye';
import * as ChannelActions from './actions/channel';
import * as MicActions from './actions/mic';
import "./main.scss";

// Import root app
import App from './components/App';

import configureStore from './configureStore';

// Create redux store with history
const initialState = {};

import UserReducer from "./reducers/user";
import ChannelReducer from "./reducers/channel";
import MicReducer from "./reducers/mic";

const appReducer = combineReducers({
  "user": UserReducer,
  "channel": ChannelReducer,
  "mic": MicReducer
})

const store = configureStore(appReducer);

var channel = window.location.pathname;

if (channel == "/") {
  channel = "/index";
}

if (channel[channel.length - 1] == "/") {
  channel = channel.substring(0, channel.length - 1);
}

store.dispatch(ChannelActions.setChannel(channel))

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      {/* <ConnectedRouter history={history}> */}
        <App />
      {/* </ConnectedRouter> */}
    </Provider>,
    document.getElementById('app'),
  );
};

render();

var subscription = connection.subscribe(channel, function(message) {
  // handle message
  console.log(message);

  switch(message.action) {
    case "take-mic": 
      store.dispatch(MicActions.micTaken(message.user));
      break;
    case "drop-mic":
      store.dispatch(MicActions.micDropped(message.user));
      break;
  }
});

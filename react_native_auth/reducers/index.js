import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';


import {createStore, applyMiddleware} from 'redux';
import { Porvider } from 'react-redux';
import rootReducer from './src/reducers';
import thunk from 'redux-thunk';


import config from './sre/aws-exports'
import Amplify from 'aws-amplify'
Amplify.configure(config);
// App
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
AppRegistry.registerComponent('RNAmplifyExample', () => ReduxApp);

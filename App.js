/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Splash from './src/containers/SplashScreen.js';
import Authenticate from './src/containers/AuthenticateScreen.js';
import Incident from './src/containers/IncidentScreen.js';

const App = StackNavigator(
    {
        Spash: {
            screen: Splash
        },
        Authenticate: {
            screen: Authenticate,
        },
        Incident: {
            screen: Incident,
        },
    },
    {
        headerMode: 'none',
        gesturesEnabled: false
    }
);

export default App;

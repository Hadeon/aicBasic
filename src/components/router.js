import React from 'react';
import {
    Text
} from 'react-native'

import { StackNavigator } from 'react-navigation';
import Splash from './SplashScreen.js';
import Authenticate from './AuthenticateScreen.js';
import Incident from './IncidentScreen.js';
import History from './HistoryScreen.js';
import Home from './HomeScreen.js';

export const AppNavigator = StackNavigator(
    {
        Splash: {
            screen: Splash
        },
        Authenticate: {
            screen: Authenticate,
        },
        Incident: {
            screen: Incident
        },
        History: {
            screen: History,
        },
        Home: {
            screen: Home
        }
    },
    {
        gesturesEnabled: true
    }
);

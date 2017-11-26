import { StackNavigator } from 'react-navigation';
import Splash from './SplashScreen.js';
import Authenticate from './AuthenticateScreen.js';
import Incident from './IncidentScreen.js';
import History from './HistoryScreen.js';

export const AppNavigator = StackNavigator(
    {
        Splash: {
            screen: Splash
        },
        Authenticate: {
            screen: Authenticate,
        },
        Incident: {
            screen: Incident,
        },
        History: {
            screen: History,
        }
    },
    {
        headerMode: 'none',
        gesturesEnabled: false
    }
);

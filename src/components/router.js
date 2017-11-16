import { StackNavigator } from 'react-navigation';
import Splash from './SplashScreen.js';
import Authenticate from './AuthenticateScreen.js';
import Incident from './IncidentScreen.js';

export const AppNavigator = StackNavigator(
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

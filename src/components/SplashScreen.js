import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';

var localStorage = require('react-native-local-storage');

export default class Splash extends Component {

    componentDidMount() {
        setTimeout(this.checkLoggedInt.bind(this), 250);
    }

    checkLoggedInt() {

        // The user will receive an Authorization code
        // Once the code is entered, and the Authenticate button is hit, the app will hit the API and wait for a confirmation as well as the object containing the Location, Employee, etc. data
        // Once authorized, the app will locally save the Authorization Code using react-native-local-storage and set a flag for isLoggedIn.
        // Whenever the app boots it will see the isLoggedIn flag and will direct the user to the Incident page

        const isLoggedIn = false;

        const routeName = isLoggedIn ? "Incident" : "Authenticate";

        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: routeName })
            ]
        })

        this.props.navigation.dispatch(resetAction);
    }

    render() {
        const { navigate } = this.props.navigation;

        return(
            <View/>
        )
    }
}

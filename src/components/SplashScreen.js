import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { NavigationActions } from 'react-navigation';


export default class Splash extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoggedIn: false,
            keyFound: false
        };
    }

    componentDidMount() {
        AsyncStorage.clear();
        AsyncStorage.getItem('authKey').then((value) => this.setState({ 'keyFound' : value }));
        setTimeout(this.checkLoggedInt.bind(this), 250);
    }

    checkLoggedInt() {
        console.log("The key is " + this.state.keyFound);
        if(this.state.keyFound == null){
            this.setState({isLoggedIn: false})
        }
        if(this.state.keyFound != null){
            this.setState({isLoggedIn: true})
        }
        // The user will receive an Authorization code
        // Once the code is entered, and the Authenticate button is hit, the app will hit the API and wait for a confirmation as well as the object containing the Location, Employee, etc. data
        // Once authorized, the app will locally save the Authorization Code using react-native-local-storage and set a flag for isLoggedIn.
        // Whenever the app boots it will see the isLoggedIn flag and will direct the user to the Incident page

        const routeName = this.state.isLoggedIn ? "Incident" : "Authenticate";

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

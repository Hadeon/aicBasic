/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { bindActionCreators, createStore } from 'redux';
import { ActionCreators } from './src/actions/index.js';
import { AppNavigator } from './src/components/router.js';
import { connect, Provider } from 'react-redux';

import reducer from './src/reducers/index.js';

const store = createStore(reducer);

const bindAction = dispatch => {
    return Object.assign({dispatch: dispatch}, bindActionCreators(ActionCreators, dispatch));
    // add dispatch to props, so it's available to addNavigationHelpers
};

const mapStateToProps = state => ({
    authorized: state.authorized
});

const ConnectedRoot = connect(
    mapStateToProps,
    bindAction
)(AppNavigator);

export default class App extends Component {
    render() {
        const { state, actions } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRoot/>
            </Provider>
        );
    }
}

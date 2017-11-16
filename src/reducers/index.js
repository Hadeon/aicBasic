import { combineReducers } from 'redux';
import { AppNavigator } from '../components/router.js';

const navigation = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}

export default combineReducers({
    navigation // this needs to match the this.props.navigation given to the addNavigationHelpers
});

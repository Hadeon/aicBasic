import { combineReducers } from 'redux';
import { AppNavigator } from '../components/router.js';

const navigation = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
}

const initialState = false;

const authorized = (state, action) => {
    if (typeof state === "undefined") {
        return initialState
    }
    switch (action.type) {
        case 'VALID':
            return Object.assign({}, state, {
                authorized: true
            });
        case 'INVALID':
            return Object.assign({}, state, {
                authorized: false
            });
            default:
                return state
    }
}

export default combineReducers({
    authorized,
    navigation
});

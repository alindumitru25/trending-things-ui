import {combineReducers} from 'redux';

import {CONNECTED, CONNECT, DISCONNECTED, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './../actions/actions';

function auth(state = {
    loading: false,
    isConnected: false,
    isAuthenticated: localStorage.getItem('token') ? true : false
}, action: any) {
    switch (action.type) {
        case CONNECT:
            return (<any>Object).assign({}, state, {
                loading: true,
                isConnected: false
            });
        case CONNECTED:
            return (<any>Object).assign({}, state, {
                loading: false,
                isConnected: true,
                socket: action.socket
            });
        case DISCONNECTED:
            return (<any>Object).assign({}, state, {
                loading: true,
                isConnected: false
            });
        case LOGIN_REQUEST:
        return (<any>Object).assign({}, state, {
            loading: true,
            isAuthenticated: false,
            user: action.creds
        })
        case LOGIN_SUCCESS:
        return (<any>Object).assign({}, state, {
            loading: false,
            isAuthenticated: true,
            errorMessage: ''
        })
        case LOGIN_FAILURE:
        return (<any>Object).assign({}, state, {
            loading: false,
            isAuthenticated: false,
            errorMessage: action.message
        })
        default:
            return state;
    }
}

function appReducer(state = {}, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}

const reducer = combineReducers({
    auth,
    appReducer
});


export default reducer;

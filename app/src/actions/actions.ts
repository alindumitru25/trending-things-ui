import * as socketIO from "socket.io-client";
import * as sailsIO from "sails.io.js";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const CONNECT = 'CONNECT';
export const CONNECTED = 'CONNECTED';
export const DISCONNECTED = 'DISCONNECTED';

// @TODO define interfaces for all

function requestLogin(creds: any) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user: any) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: user.token
    }
}

function loginError(message: string) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

function connect() {
    return {
        type: CONNECT,
        loading: true,
        isConnected: false
    }
}

function connected(socket: any) {
    return {
        type: CONNECTED,
        loading: false,
        isConnected: true,
        socket
    }
}

function disconnected() {
    return {
        type: DISCONNECTED
    }
}

export function connectSession() {
    return (dispatch: any) => {
        dispatch(connect());
        let io = sailsIO(socketIO);
        io.sails.url = 'http://localhost:1337';
        io.sails.reconnection = true;
        io.socket.on('connect', () => {
            dispatch(connected(io));
            //socket.emit('message', 'something')
        });

        io.socket.on('disconnect', () => {
            io.socket.reconnect();
            dispatch(disconnected());
        });
    };
}

export function loginUser(creds: any) {
    
}

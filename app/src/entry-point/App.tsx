import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import AppWrapper from './AppWrapper';
import reducer from '../reducers/reducer';

// Application entry
export default class App extends React.Component<{}, {}> {
    private store: any;

    constructor() {
        super();

        //@TODO apply middleware?
        let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
        this.store = createStoreWithMiddleware(reducer);
    }

    render() {
        return (
            <Provider store={this.store}>
                <AppWrapper />
            </Provider>
        );
    }
}

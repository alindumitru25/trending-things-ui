import * as React from 'react';
import LandingPage from './landing/LandingPage';
import {connect} from 'react-redux';
import {connectSession} from './../actions/actions';

class AppWrapper extends React.Component<Props, {}> {
    componentWillMount() {
        this.props.dispatch(connectSession());
    }

    render() {
        if (!this.props.auth.isAuthenticated) {
            return (
                <LandingPage 
                    isConnected={this.props.auth.isConnected}
                />
            );
        }
    }
}

interface Props {
    dispatch: any,
    auth: any,
    loading: boolean
}

function mapStateToProps(state: any) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AppWrapper);

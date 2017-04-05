import * as React from "react";

class LandingPage extends React.Component<Props, {}> {
    renderAbsoluteLogo() {
        return <img src="images/logo.png" className="LandingPage-AbsoluteLogo" />
    }

    renderLoginInput() {
        return <div className="LandingPage-LoginInput">
            <div className="LandingPage-LoginInput-Username">
                <div className="LandingPage-LoginInput-Username-ico-user ico">
                </div>
                <input type="text" defaultValue="type e-mail address" className="LandingPage-LoginInput-Username-input" />
                <img src="../../images/login-button.png" className="LandingPage-LoginInput-Username-login-button" />
            </div>
            <div className="LandingPage-LoginInput-Password">
                <div className="LandingPage-LoginInput-Password-ico-text ico">
                </div>
                <input type="text" value="type password" className="LandingPage-LoginInput-Password-input" />
            </div>
        </div>
    }

    renderNeedHelp() {
        return <div className="LandingPage-Help">
            <div className="RoundedBlackButton">
                HELP?
            </div>
        </div>
    }

    renderSignUpText() {
        return <div className="LandingPage-SignUpText">
            <div className="RoundedBlackButton">
                CREATE ACCOUNT
            </div>
        </div>
    }

    renderContent() {
        if (!this.props.isConnected) {
            return <div className="spinner LandingPage-Loader"></div>;
        }

        return <div>
            {this.renderLoginInput()}
        </div>
    }

    render() {
        return <div className="LandingPage">
            {this.renderAbsoluteLogo()}
            {this.renderContent()}
        </div>
    }
}

interface Props {
    isConnected: boolean
}

export default LandingPage;
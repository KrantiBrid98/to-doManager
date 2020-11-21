import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { SIGN_IN, SIGN_OUT } from "../Action";

class GoogleAuth extends Component {
  state = {
    isSignedIn: null,
  };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1075430275709-512blta3ela4pjtanbpnlubmrrjmccmr.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // making changes in the store as per the signed status by creating an action accordingly
          this.changeSignedStatus(this.auth.isSignedIn.get());
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          // listens if the user signs out and updates the state immediates and not only in refreshing the page
          this.auth.isSignedIn.listen(this.changeSignedStatus);
        });
    });
  }

  changeSignedStatus = (isSignedIn) => {
    if (isSignedIn)
      this.props.SIGN_IN(
        this.auth.currentUser.get().getId(),
        this.auth.currentUser.get().getBasicProfile().getName()
      );
    else {
      this.props.SIGN_OUT();
    }
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return <div>Null</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.onSignOutClick}
          className="ui google plus button"
        ><i className="google plus icon"></i>
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.onSignInClick}
          className="ui google plus button"
        ><i className="google plus icon"></i>
          Sign In with Google
        </button>
      );
    }
  };

  onSignInClick = () => {
    if (this.auth)
      this.auth.signIn();
    else
      console.log(`Should open on port 3000 only`)
  };

  onSignOutClick = () => {
    if (this.auth)
      this.auth.signOut();
    else
      console.log(`Should open on port 3000 only`)
  };

  render() {
    return <Fragment>{this.renderAuthButton()}</Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { SIGN_IN, SIGN_OUT })(GoogleAuth);
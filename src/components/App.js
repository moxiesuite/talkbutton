import React from 'react';
import connect from "./connect";
import UserSignupPage from './UserSignupPage';
import TalkPage from './TalkPage';
import "./App.scss";

class App extends React.Component {
  render() {
    var body = <UserSignupPage />;

    if (this.props.user.username != null) {
      body = <TalkPage />;
    }

    return (
      body
    );
  }
}

export default connect(App, "user");
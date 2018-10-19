import React from 'react';
import connect from "./connect";
import * as UserActions from "../actions/user";
import "./UserSignupPage.scss";

class UserSignupPage extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    }
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(UserActions.setUser(this.state.username))
  }

  render() {
    return (
      <div className="UserSignupPage columns">
        <input placeholder="Enter your name..." type="text" value={this.state.username} onChange={this.handleChange.bind(this)} className="input is-primary"/>
        <button className="button bottom-button is-primary" onClick={this.handleSubmit.bind(this)}>Get Talking!</button>
      </div>
    );
  }
}

export default connect(UserSignupPage, "user");

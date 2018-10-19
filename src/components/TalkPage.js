import React from 'react';
import connect from "./connect";
import * as MicActions from "../actions/mic";
import "./TalkPage.scss";

class TalkPage extends React.Component {
  takeMic(event) {
    this.props.dispatch(MicActions.takeMic());
  }

  dropMic(event) {
    this.props.dispatch(MicActions.dropMic());
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    var className = "mic";
    var micOwner = (
      <div className={className}>
        🎤
      </div>
    );

    if (this.props.mic.owner != null) {
      // If you have the mic...
      if (this.props.mic.owner.uuid == this.props.user.uuid) {
        micOwner = (
          <div className="mic owner">
            <div>You have the mic! 🎤</div>
            <div className="dropmic" onClick={this.dropMic.bind(this)}>+</div>
          </div>
        )
      } else {
        // If someone else has the mic...
        var name = this.props.mic.owner.username;
        micOwner = (
          <div className="mic taken">
            {name} has the mic! 🎤
          </div>
        )
      }
    }

    return (
      <div className="TalkPage">
        {micOwner}
        <button className="button bottom-button take-mic" onClick={this.takeMic.bind(this)}>Take Mic</button>
      </div>
    );
  }
}

export default connect(TalkPage, "mic", "user");
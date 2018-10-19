import connection from '../faye';

export function takeMic() {
  return (dispatch, getState) => {
    const user = getState().user;
    const channel = getState().channel.name;

    connection.publish(channel, {
      action: "take-mic",
      user: user
    });
  }
}

export function dropMic() {
  return (dispatch, getState) => {
    const user = getState().user;
    const channel = getState().channel.name;

    connection.publish(channel, {
      action: "drop-mic",
      user: user
    });
  }
}

export const MIC_TAKEN = "MIC_TAKEN";
export function micTaken(user) {
  return {
    type: MIC_TAKEN,
    user: user
  }
}

export const MIC_DROPPED = "MIC_DROPPED";
export function micDropped(user) {
  return {
    type: MIC_DROPPED,
    user: user
  }
}
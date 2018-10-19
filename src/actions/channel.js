export const SET_CHANNEL = 'SET_CHANNEL';
export function setChannel(channel) {
  return {
    type: SET_CHANNEL,
    name: channel
  }
}
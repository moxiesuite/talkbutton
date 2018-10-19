import * as Channel from '../actions/channel'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case Channel.SET_CHANNEL:
      return Object.assign({}, state, {
        name: action.name
      })
    default:
      return state
  }
}
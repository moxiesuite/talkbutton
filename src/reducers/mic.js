import * as Mic from '../actions/mic'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case Mic.MIC_TAKEN:
      return Object.assign({}, state, {
        owner: action.user,
        time: new Date().getTime()
      })
      break;
    case Mic.MIC_DROPPED: 
      return Object.assign({}, state, {
        owner: null,
        time: new Date().getTime()
      })
    default:
      return state
  }
}
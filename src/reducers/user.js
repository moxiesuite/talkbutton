import * as User from '../actions/user'
import uuidv4 from 'uuid/v4';

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case User.SET_USER:
      return Object.assign({}, state, {
        username: action.username,
        uuid: uuidv4() 
      })
    default:
      return state
  }
}
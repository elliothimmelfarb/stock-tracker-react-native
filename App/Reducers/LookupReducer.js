import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  list: [],
  search: null,
  attempting: false,
  error: null,
})

// login attempts
const request = (state, action) =>
  state.merge({ attempting: true })

// successful logins
const success = (state, action) =>
  state.merge({ attempting: false, list: action.data })

// login failure
const failure = (state, action) =>
  state.merge({ attempting: false, error: action.data.problem })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.REQUEST_STOCK_LOOKUP]: request,
  [Types.RECEIVE_LOOKUP_SUCCESS]: success,
  [Types.RECEIVE_LOOKUP_FAILURE]: failure,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)

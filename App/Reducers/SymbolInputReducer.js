import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  value: '',
})

// update input value
const update = (state, action) =>
  state.merge({ value: action.value })

// clearn input value
const clear = (state, action) =>
  state.merge({ value: '' })

// map our types to our handlers
const ACTION_HANDLERS = {
  [Types.UPDATE_INPUT]: update,
  [Types.CLEAR_INPUT]: clear,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)

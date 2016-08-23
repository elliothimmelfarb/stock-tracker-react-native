import Types from './Types'

const attemptLogin = (username, password) =>
  ({ type: Types.LOGIN_ATTEMPT, username, password })

const loginSuccess = (username) =>
  ({ type: Types.LOGIN_SUCCESS, username })

const loginFailure = (errorCode) =>
  ({ type: Types.LOGIN_FAILURE, errorCode })

const logout = () => ({ type: Types.LOGOUT })

const startup = () => ({ type: Types.STARTUP })

const requestTemperature = (city) => ({ type: Types.TEMPERATURE_REQUEST, city })
const receiveTemperature = (temperature) => ({ type: Types.TEMPERATURE_RECEIVE, temperature })
const receiveTemperatureFailure = () => ({ type: Types.TEMPERATURE_FAILURE })

const updateInput = (value) => ({ type: Types.UPDATE_INPUT, value })
const clearInput = () => ({ type: Types.CLEAR_INPUT })

console.log(Types)

const requestStockLookup = (symbol) => ({ type: Types.REQUEST_STOCK_LOOKUP, symbol })
const receiveLookupSuccess = (data) => ({ type: Types.RECEIVE_LOOKUP_SUCCESS, data })
const receiveLookupFailure = () => ({ type: Types.RECEIVE_LOOKUP_FAILURE })

/**
 Makes available all the action creators we've created.
 */
export default {
  attemptLogin,
  loginSuccess,
  loginFailure,
  logout,
  startup,
  requestTemperature,
  receiveTemperature,
  receiveTemperatureFailure,
  updateInput,
  clearInput,
  requestStockLookup,
  receiveLookupSuccess,
  receiveLookupFailure,
}

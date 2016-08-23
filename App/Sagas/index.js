import { fork } from 'redux-saga/effects'
import API from '../Services/Api'
import StockApi from '../Services/StockApi'
import FixtureAPI from '../Services/FixtureApi'
import { watchStartup } from './StartupSaga'
import { watchLoginAttempt } from './LoginSaga'
import getCityWeather from './GetCityWeatherSaga'
import DebugSettings from '../Config/DebugSettings'
import SymbolLookup from './SymbolLookupSaga'

// Create our API at this level and feed it into
// the sagas that are expected to make API calls
// so there's only 1 copy app-wide!
// const api = API.create()
const api = DebugSettings.useFixtures ? FixtureAPI : API.create()
const stockApi = StockApi.create()

// start the daemons
export default function * root () {
  yield fork(watchStartup)
  yield fork(watchLoginAttempt)
  yield fork(getCityWeather(api).watcher)
  yield fork(SymbolLookup(stockApi).watcher)
}
// export default function * root () {
//   yield [
//     watchStartup(),
//     watchLoginAttempt(),
//     getCityWeather(api).watcher(),
//     SymbolLookup(stockApi).watcher(),
//   ]
// }

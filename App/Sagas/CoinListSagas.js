
import { call, put } from 'redux-saga/effects'
import CoinListActions from '../Redux/CoinListRedux'
import Config from '../../App/Config/AppConfig'

export function * getCoinListSaga (api, action) {
  const { data } = action

  // make the call to the api

  const response = yield call(api.getCoinListService, getStartAndEndLimit(data.page))
  // alert(data.page)
  // success?
  if (response.ok) {

    // yield put(CoinListActions.coinListSuccess(data.payload.concat(response.data.data)))
    yield put(CoinListActions.coinListSuccess([...data.payload, ...response.data.data]))

  } else {
    alert(JSON.stringify(response.data))
    yield put(CoinListActions.coinListFailure("response.data.status.error_message"))
  }
}

export function getStartAndEndLimit (page) {

  if (page === 1) {
    return {start: 1, limit: Config.pageNumber}
  }
  return {start: (page - 1) * (Config.pageNumber) + 1, limit: Config.pageNumber}
}

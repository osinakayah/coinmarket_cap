
import { call, put } from 'redux-saga/effects'
import CoinListActions from '../Redux/CoinListRedux'
import Config from '../../App/Config/AppConfig'
// import { CoinListSelectors } from '../Redux/CoinListRedux'

export function * getCoinListSaga (api, action) {
  const { data } = action
  // make the call to the api

  const response = yield call(api.getCoinListService, getStartAndEndLimit(data))

  // success?
  if (response.ok) {

    yield put(CoinListActions.coinListSuccess(response.data.data))
  } else {
    yield put(CoinListActions.coinListFailure(response.data.status.error_message))
  }
}

export function getStartAndEndLimit (page) {

  if (page === 1) {
    return {start: 1, limit: Config.pageNumber}
  }
  return {start: (page - 1) * (Config.pageNumber) + 1, limit: Config.pageNumber}
}

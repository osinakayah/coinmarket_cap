
import { call, put } from 'redux-saga/effects'
import CoinListActions from '../Redux/CoinListRedux'
// import { CoinListSelectors } from '../Redux/CoinListRedux'

export function * getCoinListSaga (api, action) {
  const { data } = action
  // make the call to the api
  const response = yield call(api.getCoinListService, data)

  // success?
  if (response.ok) {

    yield put(CoinListActions.coinListSuccess(response.data))
  } else {
    yield put(CoinListActions.coinListFailure())
  }
}

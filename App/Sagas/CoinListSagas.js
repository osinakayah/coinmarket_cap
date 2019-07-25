import { Alert } from 'react-native'
import { call, put } from 'redux-saga/effects'
import CoinListActions from '../Redux/CoinListRedux'
import Config from '../../App/Config/AppConfig'

export function * getCoinListSaga (api, action) {
  const { data } = action

  // make the call to the api

  try {
    const response = yield call(api.getCoinListService, getStartAndEndLimit(data.page))

    // success?
    if (response.ok) {
      yield put(CoinListActions.coinListSuccess([...data.payload, ...response.data.data]))
    }
    else {
      let errorMessage = response.data ? response.data.status.error_message : response.problem
      yield put(CoinListActions.coinListFailure(errorMessage))
      Alert.alert('Error', errorMessage)
    }
  } catch (e) {
    Alert.alert('Error', 'An error occurred, please try again')
  }
}

export function getStartAndEndLimit (page){

  if (page === 1) {
    return {start: 1, limit: Config.pageNumber}
  }
  return {start: (page - 1) * (Config.pageNumber) + 1, limit: Config.pageNumber}
}

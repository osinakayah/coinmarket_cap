import FixtureAPI from '../../App/Services/FixtureApi'
import Config from '../../App/Config/AppConfig'
import { getCoinListSaga, getStartAndEndLimit } from '../../App/Sagas/CoinListSagas'
import CoinListActions from '../../App/Redux/CoinListRedux'
import { expectSaga } from 'redux-saga-test-plan'

test('Successful request for coinlist', function () {
  const page = 1
  const response = require('../../App/Fixtures/coins.json')
  return expectSaga(getCoinListSaga, FixtureAPI, {page})
    .put(CoinListActions.coinListSuccess(response.data))
    .run()
})

test('Test convert page number to offset points', function () {
  expect(getStartAndEndLimit(1)).toEqual({start: 1, limit: Config.pageNumber})
  expect(getStartAndEndLimit(2)).toEqual({start: 11, limit: Config.pageNumber})
  expect(getStartAndEndLimit(3)).toEqual({start: 21, limit: Config.pageNumber})
})

test('failure request for coinlist', function () {
  const page = 0
  const response = require('../../App/Fixtures/error.json')
  return expectSaga(getCoinListSaga, FixtureAPI, {page})
    .put(CoinListActions.coinListFailure(response.status.error_message))
    .run()
});

import FixtureAPI from '../../App/Services/FixtureApi'
import Config from '../../App/Config/AppConfig'
import { getCoinListSaga, getStartAndEndLimit } from '../../App/Sagas/CoinListSagas'
import CoinListActions from '../../App/Redux/CoinListRedux'
import { expectSaga } from 'redux-saga-test-plan'

test('Successful request for coinlist', function () {
  const page = 1
  const payload = [
    {
      id: 1,
      name: 'Bitcoin'
    }
  ]
  return expectSaga(getCoinListSaga, FixtureAPI, {page})
    .put(CoinListActions.coinListSuccess(payload))
    .run()
})

test('Test convert page number to offset points', function () {
  expect(getStartAndEndLimit(1)).toEqual({start: 1, limit: Config.pageNumber})
  expect(getStartAndEndLimit(2)).toEqual({start: 21, limit: Config.pageNumber});
})

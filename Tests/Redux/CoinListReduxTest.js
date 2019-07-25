import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/CoinListRedux'

test('request', () => {
  const page = 1
  const state = reducer(INITIAL_STATE, Actions.coinListRequest({page}))

  expect(state.fetching).toBe(true)
  expect(state.data.page).toBe(page)
  expect(state.error).toBeNull()
})

test('success', () => {
  const payload = [
    {
      id: 1,
      name: 'Bitcoin'
    }
  ]
  const state = reducer(INITIAL_STATE, Actions.coinListSuccess(payload))

  expect(state.fetching).toBe(false)
  expect(state.payload).toEqual(payload)
  expect(state.error).toBeNull()
})


test('failure', () => {
  const error = 'Something went wrong'
  const state = reducer(INITIAL_STATE, Actions.coinListFailure(error))

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(error)
})

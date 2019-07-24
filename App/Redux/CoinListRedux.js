import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  coinListRequest: ['data'],
  coinListSuccess: ['payload'],
  coinListFailure: ['error']
})

export const CoinListTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: false,
  payload: [],
  error: null
})

/* ------------- Selectors ------------- */

export const CoinListSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: [] })

// successful api lookup
export const success = (state, { payload }) => {
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = (state, {error}) =>
  state.merge({ fetching: false, error })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COIN_LIST_REQUEST]: request,
  [Types.COIN_LIST_SUCCESS]: success,
  [Types.COIN_LIST_FAILURE]: failure
})

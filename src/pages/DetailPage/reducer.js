import produce from 'immer'

import {
  SET_SINGLE_CRYPTO_CURRENCIES_REQUEST,
  SET_SINGLE_CRYPTO_CURRENCIES_SUCCESS,
  SET_SINGLE_CRYPTO_CURRENCIES_ERROR,
} from './actionTypes'

export const initialState = {
  currency: {},
  loading: false,
  errorMessage: null,
}

/* eslint-disable default-case, no-param-reassign */
const getSingleCryptoCurrencyReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_SINGLE_CRYPTO_CURRENCIES_REQUEST:
        draft.currency = {}
        draft.loading = true
        draft.errorMessage = null
        break

      case SET_SINGLE_CRYPTO_CURRENCIES_SUCCESS:
        draft.currency = action.payload
        draft.loading = false
        break

      case SET_SINGLE_CRYPTO_CURRENCIES_ERROR:
        draft.errorMessage = action.errorMessage
        break
    }
  })

export default getSingleCryptoCurrencyReducer

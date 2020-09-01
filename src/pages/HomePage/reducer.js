import produce from 'immer'

import {
  SET_CRYPTO_CURRENCIES_REQUEST,
  SET_CRYPTO_CURRENCIES_SUCCESS,
  SET_CRYPTO_CURRENCIES_ERROR,
} from './actionTypes'

export const initialState = {
  currencies: [],
  loading: false,
  errorMessage: null,
}

/* eslint-disable default-case, no-param-reassign */
const getAllCryptoCurrenciesReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_CRYPTO_CURRENCIES_REQUEST:
        draft.loading = true
        draft.currencies = []
        draft.errorMessage = null
        break

      case SET_CRYPTO_CURRENCIES_SUCCESS:
        draft.currencies = action.payload
        draft.loading = false
        break

      case SET_CRYPTO_CURRENCIES_ERROR:
        draft.errorMessage = action.errorMessage
        draft.loading = false
        break
    }
  })

export default getAllCryptoCurrenciesReducer

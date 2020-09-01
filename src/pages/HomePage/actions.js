import to from 'await-to-js'

import {
  SET_CRYPTO_CURRENCIES_REQUEST,
  SET_CRYPTO_CURRENCIES_SUCCESS,
  SET_CRYPTO_CURRENCIES_ERROR,
} from './actionTypes'

import currenciesService from '../../services/currenciesService'

export const getAllCryptoCurrenciesRequest = (currency) => async (dispatch) => {
  dispatch({ type: SET_CRYPTO_CURRENCIES_REQUEST })

  const [error, payload] = await to(
    currenciesService.getAllCryptoCurrencies(currency)
  )

  if (error) {
    return dispatch({ type: SET_CRYPTO_CURRENCIES_ERROR, error })
  }

  dispatch({ type: SET_CRYPTO_CURRENCIES_SUCCESS, payload })
}

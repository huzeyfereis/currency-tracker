import to from 'await-to-js'

import {
  SET_SINGLE_CRYPTO_CURRENCIES_REQUEST,
  SET_SINGLE_CRYPTO_CURRENCIES_SUCCESS,
  SET_SINGLE_CRYPTO_CURRENCIES_ERROR,
} from './actionTypes'

import currencyService from '../../services/currencyService'

export const getSingleCryptoCurrencyRequest = (
  cryptoCurrency,
  currency
) => async (dispatch) => {
  dispatch({ type: SET_SINGLE_CRYPTO_CURRENCIES_REQUEST })

  const [error, payload] = await to(
    currencyService.getSingleCryptoCurrency(cryptoCurrency, currency)
  )

  if (error) {
    return dispatch({
      type: SET_SINGLE_CRYPTO_CURRENCIES_ERROR,
      error,
    })
  }
  dispatch({ type: SET_SINGLE_CRYPTO_CURRENCIES_SUCCESS, payload })
}

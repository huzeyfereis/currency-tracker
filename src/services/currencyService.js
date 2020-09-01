import axios from 'axios'

export const getSingleCryptoCurrency = async (cryptoCurrency, currency) => {
  return axios
    .get(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
    )
    .then((response) => {
      if (!response.data) return null

      return response
    })
}

export default { getSingleCryptoCurrency }

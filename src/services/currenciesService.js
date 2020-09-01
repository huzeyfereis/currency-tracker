import axios from 'axios'

export const getAllCryptoCurrencies = async (currency) => {
  return axios
    .get(
      `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`
    )
    .then((response) => {
      if (!response.data) return null

      return response
    })
}

export default { getAllCryptoCurrencies }

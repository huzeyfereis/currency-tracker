import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Navbar from '../../components/NavBar'
import CurrencyInfo from '../../components/CurrencyInfo'
import SelectCurrency from '../../components/SelectCurrency'
import Select from '../../components/SelectCurrency/Select'
import Container from '../../components/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../components/Loading'
import CurrencyDetails from '../../components/CurrencyDetails'
import Rank from '../../components/CurrencyDetails/components/Rank'

import { getAllCryptoCurrenciesRequest } from '../HomePage/actions'
import { getSingleCryptoCurrencyRequest } from './actions'

import styles from './Detail-page.module.css'

const DetailPage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { currencies } = useSelector((state) => state.homePage)
  const { currency, loading } = useSelector((state) => state.detailPage)
  const globalCurrencies = ['USD', 'GBP', 'EUR', 'JPY', 'KRW']
  const imageUrl = 'https://www.cryptocompare.com'

  if (currency && currency.data && !loading) {
    const currencyCode = Object.keys(currency.data.DISPLAY)[0]
    const currentCurrency =
      currency.data?.DISPLAY[Object.keys(currency.data.DISPLAY)[0]]
    const currentCurrencyCode = Object.keys(currentCurrency)[0]
    const currencyInfo = currencies.data.Data.filter((currency) => {
      if (currency.CoinInfo.Name === currencyCode) {
        return currency.CoinInfo
      }
    })
    const rank = currencies.data.Data.findIndex(
      (currency) => currency.CoinInfo.Name === currencyCode
    )

    const handleOnCurrencyChange = (e) => {
      dispatch(getSingleCryptoCurrencyRequest(currencyCode, e.target.value))
    }

    const handleGoBack = () => {
      dispatch(getAllCryptoCurrenciesRequest('USD'))
      history.push('/')
    }

    return (
      <Container>
        <Navbar>
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            onClick={handleGoBack}
            cursor="pointer"
            size="2x"
            color="#E7F2FD"
          />
          <CurrencyInfo>
            <div>
              <img
                className={styles.headerImg}
                src={`${imageUrl}${currencyInfo[0].CoinInfo.ImageUrl}`}
                width="30px"
                height="30px"
                alt="img"
              />
              <div className={styles.headerFullName}>
                <div>{currencyInfo[0].CoinInfo.FullName}</div>
                <div className={styles.headerName}>
                  {currencyInfo[0].CoinInfo.Name}
                </div>
              </div>
              <div className={styles.headerPrice}>
                {currentCurrency[currentCurrencyCode].PRICE}
              </div>
            </div>
          </CurrencyInfo>
          <SelectCurrency>
            <Select onChange={handleOnCurrencyChange}>
              {globalCurrencies.map((value, index) => (
                <option key={index} id={index} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          </SelectCurrency>
        </Navbar>
        <CurrencyDetails>
          <Rank>
            <div>
              <div className={styles.rankTitle}>RANK</div>
              <div className={styles.rank}>
                <div className={styles.rankInfo}>{rank + 1}</div>
              </div>
            </div>
          </Rank>
          <div className={styles.gridContainer}>
            <div className={styles.info}>
              <div className={styles.title}>MARKET CAP</div>
              {currentCurrency[currentCurrencyCode].MKTCAP}
            </div>
            <div className={styles.info}>
              <div className={styles.title}>24H VOLUME</div>
              {currentCurrency[currentCurrencyCode].VOLUME24HOURTO}
            </div>
            <div className={styles.info}>
              <div className={styles.title}>CIRULATING SUPPLY</div>
              {currentCurrency[currentCurrencyCode].VOLUME24HOURTO}
              <span className={styles.code}>
                {currencyInfo[0].CoinInfo.Name}
              </span>
            </div>
          </div>
        </CurrencyDetails>
      </Container>
    )
  } else {
    return <Loading />
  }
}

export default DetailPage

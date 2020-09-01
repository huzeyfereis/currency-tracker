import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Navbar from '../../components/NavBar'
import Logo from '../../components/Logo'
import SelectCurrency from '../../components/SelectCurrency'
import Select from '../../components/SelectCurrency/Select'
import Container from '../../components/Container'
import Table from '../../components/Table'
import Loading from '../../components/Loading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faArrowDown,
  faCircle,
} from '@fortawesome/free-solid-svg-icons'

import { getAllCryptoCurrenciesRequest } from './actions'
import { getSingleCryptoCurrencyRequest } from '../DetailPage/actions'

import styles from '../../components/Table/Table.module.css'

const HomePage = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { currencies, loading } = useSelector((state) => state.homePage)
  const [globalCurrency, setGlobalCurrency] = useState('USD')
  const globalCurrencies = ['USD', 'GBP', 'EUR', 'JPY', 'KRW']
  const imageUrl = 'https://www.cryptocompare.com'

  const [time, setTime] = React.useState(0)
  React.useEffect(() => {
    dispatch(getAllCryptoCurrenciesRequest(globalCurrency))
    const timer = window.setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    }, 60000)
    return () => {
      window.clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    dispatch(getAllCryptoCurrenciesRequest(globalCurrency))
  }, [time])

  const handleGetDetail = (cryptoCurrency) => {
    dispatch(getSingleCryptoCurrencyRequest(cryptoCurrency, globalCurrency))
    history.push(`/details/${cryptoCurrency}`)
  }

  const handleOnCurrencyChange = (e) => {
    setGlobalCurrency(e.target.value)
    dispatch(getAllCryptoCurrenciesRequest(e.target.value))
  }

  const getPercentageColor = (currency) => {
    if (Number(currency?.CHANGEPCT24HOUR) < 0) {
      return 'red'
    } else if (Number(currency?.CHANGEPCT24HOUR) === 0) {
      return 'orange'
    }
    return 'green'
  }

  const renderIconIndicator = (currency) => {
    const color = getPercentageColor(currency)
    let icon = null
    switch (color) {
      case 'green':
        icon = faArrowUp
        break
      case 'orange':
        icon = faCircle
        break
      case 'red':
        icon = faArrowDown
        break

      default:
        break
    }
    if (!icon) return null
    return <FontAwesomeIcon icon={icon} size="xs" />
  }

  return (
    <Container>
      {loading && <Loading />}
      <Navbar>
        <Logo>VFCrypto</Logo>
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
      <Table>
        <thead className={styles.thead}>
          <tr>
            <th></th>
            <th></th>
            <th className={styles.coinInfo}>CRYPTOCURRENCY</th>
            <th>PRICE</th>
            <th>MARKET CAP</th>
            <th>24H CHANGE</th>
          </tr>
        </thead>
        <tbody>
          {currencies.data?.Data.map((currency, index) => {
            const selectedCurrency = currency.DISPLAY[globalCurrency]

            return (
              <tr
                key={index}
                onClick={() => handleGetDetail(currency.CoinInfo.Name)}
              >
                <td>{index + 1}</td>
                <td>
                  <img
                    src={imageUrl + currency.CoinInfo.ImageUrl}
                    width="30px"
                    height="30px"
                    alt="img"
                  />
                </td>

                <td className={styles.coinInfo}>
                  {currency.CoinInfo.FullName}
                </td>
                <td>{selectedCurrency.PRICE}</td>
                <td>{selectedCurrency.MKTCAP}</td>
                <td style={{ color: getPercentageColor(selectedCurrency) }}>
                  {selectedCurrency.CHANGEPCT24HOUR}%{' '}
                  {renderIconIndicator(selectedCurrency)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
  // } else {
  //   return <Loading />
  // }
}

export default HomePage

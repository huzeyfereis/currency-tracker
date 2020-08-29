import React from 'react'

import Navbar from '../NavBar'
import Logo from '../Logo'
import SelectCurrency from '../SelectCurrency'
import Select from '../SelectCurrency/Select'

const Header = () => {
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'KRW']

  const handleOnChange = (e) => {
    console.log(e.target.getAttribute('id'))
  }

  return (
    <Navbar>
      <Logo>VFCrypto</Logo>
      <SelectCurrency>
        <Select onChange={handleOnChange}>
          {currencies.map((value, index) => (
            <option id={value} value={index}>
              {value}
            </option>
          ))}
        </Select>
      </SelectCurrency>
    </Navbar>
  )
}

export default Header

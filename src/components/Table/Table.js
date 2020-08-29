import React, { useState, Component } from 'react'
import { Table } from 'reactstrap'

import { bindActionCreators } from 'redux'

import styles from './Table.module.css'
import { useDispatch, connect } from 'react-redux'

class TableB extends Component {
  render() {
    return (
      <Table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>CRYPTOCURRENCY</th>
            <th>PRICE</th>
            <th>MARKET CAP</th>
            <th>24H CHANGE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default TableB

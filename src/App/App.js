import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/details/:id" exact component={DetailPage} />
    </Switch>
  )
}

export default App

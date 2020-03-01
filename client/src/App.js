import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Navigation, Layout } from './components/UI'

import {
  Home,
  StocksAvailable,
  StocksItem,
  StocksPurchase,
  Orders,
  Suppliers,
  Customers,
  Reports,
  AuthLogin,
  AuthRegister
} from './routes'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Layout>
          <Switch>
            <Route path='/auth/register'>
              <AuthRegister />
            </Route>
            <Route path='/auth/login'>
              <AuthLogin />
            </Route>
            <Route path='/stocks/purchase'>
              <StocksPurchase />
            </Route>
            <Route path='/stocks/available'>
              <StocksAvailable />
            </Route>
            <Route path='/stocks/item'>
              <StocksItem />
            </Route>
            <Route path='/stocks/purchase'>
              <StocksPurchase />
            </Route>
            <Route path='/orders'>
              <Orders />
            </Route>
            <Route path='/suppliers'>
              <Suppliers />
            </Route>
            <Route path='/customers'>
              <Customers />
            </Route>
            <Route path='/reports'>
              <Reports />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Layout>
      </div>
    </Router>
  )
}

export default App

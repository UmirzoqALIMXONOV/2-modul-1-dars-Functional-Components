import React, { Component } from 'react'
import Cabinet from './Pages/Cabinet'
import Product from './Pages/Product'
import { Link, Switch, Route } from 'react-router-dom'
import Setting from './Pages/Setting'
import Dashboard from './Pages/Dashboard'
import Balance from './Pages/Balance'
import OneProduct from './Pages/OneProduct'
import Details from './Pages/Details'
import LastPage from './Pages/LastPage'
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row my-3">
          <div className="col-md-12">
            <Link to="/" className='btn btn-dark mx-1'>Home</Link>
            <Link to="/cabinet" className='btn btn-success'>Cabinet</Link>
            <Link to="/product" className='btn btn-success mx-1'>Product</Link>
          </div>
        </div>
        <hr />
        <Switch>
          <Route path='/product/:id/setting/details/:id' component={LastPage} />
          <Route path='/product/:id/setting/details' component={Details} />
          <Route path='/product/:id/setting' component={Setting} />
          <Route path='/product/:id' component={OneProduct} />
          <Route path='/cabinet/dashboard/balance' component={Balance} />
          <Route path='/cabinet/dashboard' component={Dashboard} />
          <Route path='/cabinet/setting' component={Setting} />
          <Route path='/cabinet' component={Cabinet} />
          <Route path='/product' component={Product} />
        </Switch>
      </div>
    )
  }
}

import React, { Component } from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Cars from './Pages/Cars'
import OneCarPage from './Pages/OneCarPage'
export default class App extends Component {
  render() {
    return (
      <div className='container'>
            <div className="row my-4">
                <div className="col-md-10 offset-1">
                    <Link to='/' className='btn btn-dark'>Home</Link>
                    <Link to='/login' className='btn btn-primary float-end'>Login</Link>
                </div>
            </div>
            <hr />
            <Switch>
                <Route path='/cars/:id/:name/:year/:mator/:color/:price' component={OneCarPage}/>
                <Route path='/cars' component={Cars}/>
                <Route path='/login' component={Login}/>
            </Switch>

      </div>
    )
  }
}

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Dashboard</h3>
        <Link to="/cabinet/dashboard/balance" className='btn btn-success mx-1'>Balance</Link>
      </div>
    )
  }
}

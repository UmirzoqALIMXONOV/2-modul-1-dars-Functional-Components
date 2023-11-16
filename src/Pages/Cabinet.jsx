import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Cabinet extends Component {
  render() {
    return (
      <div>
        <h2>Cabinet</h2>
        <Link to='/cabinet/setting' className='btn btn-primary'>Setting</Link>
        <Link to='/cabinet/dashboard' className='btn btn-danger mx-1'>Dashboard</Link>
      </div>
    )
  }
}

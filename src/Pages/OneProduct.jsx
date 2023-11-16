import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class OneProduct extends Component {
  render() {
   var p =  this.props.match.params
    return (
      <div>
        <h6>OneProduct</h6>
        <Link className='btn btn-dark' to={'/product/'+p.id+'/setting'}>Setting</Link>
      </div>
    )
  }
}

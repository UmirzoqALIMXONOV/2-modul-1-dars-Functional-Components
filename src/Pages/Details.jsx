import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Details extends Component {
    render() {
      var pp = this.props.match.params;
      console.log(pp);
    return (
      <div>
        <h6>Details</h6>
        <Link to={'/product/'+pp.id+'/setting/details/'+pp.id}>Click here </Link>
      </div>
    )
  }
}

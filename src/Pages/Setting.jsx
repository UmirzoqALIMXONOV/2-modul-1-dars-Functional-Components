import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Setting extends Component {
    render() {
        var pp = this.props.match.params;
        return (
            <div>
                <h3> Setting </h3>
                <Link to={'/product/'+pp.id+'/setting/details'} className='btn btn-danger'>Detail</Link>
            </div>
        )
    }
}

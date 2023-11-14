import React, { Component } from 'react'

export default class OneProdicut extends Component {
  render() {
    const pp = this.props.match.params
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h1>Product raqami:  <span className='text-danger'> {pp.id}</span></h1>
            <h1>Product nomi:  <span className='text-danger'> {pp.name}</span></h1>
            <h1>Product ogirligi:  <span className='text-danger'> {pp.weight}</span></h1>
            <h1>Product company: <span className='text-danger'> {pp.company}</span></h1>
          </div>
          <div className="col-md-6">
            <p>
              {pp.info}
            </p>
            <img src={pp.img}/>
          </div>
        </div>
      </div>
    )
  }
}

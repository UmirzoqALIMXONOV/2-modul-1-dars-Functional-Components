import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class OneCarPage extends Component {

  render() {
    console.log(this.props.match.params.img);
    var p = this.props.match.params

      
    return (
      <div>
        <Link to="/cars" className="btn btn-info"> Go Back</Link>
        <div className="row my-4">
          <div className="col-6">
            <div className="card card-body">
              <h5>No: <span className='text-success'> {p.id}</span></h5>
              <h5>CarName: <span className='text-success'>{p.name}</span></h5>
              <h5>Year: <span className='text-success'>{p.year}</span></h5>
              <h5>Motor: <span className='text-success'>{p.mator}</span></h5>
              <h5>CarColor: <span className='text-success'>{p.color}</span></h5>
              <h5>CarPrice: <span className='text-success'>{p.price}</span></h5>
            </div>
          </div>
          <div className="col-6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat repudiandae incidunt a explicabo perferendis ducimus provident ipsum assumenda et non quibusdam voluptatibus, esse aut, eligendi dignissimos odio labore voluptas voluptate vel, porro beatae atque. Doloremque alias perspiciatis minima vitae praesentium suscipit officiis nemo? Dignissimos animi dolorem, consectetur temporibus labore libero similique voluptatum ipsum necessitatibus aliquam veniam ipsa nostrum quis recusandae repellendus maxime atque blanditiis corrupti. Possimus sequi sit delectus, sapiente veniam quaerat tenetur illo dolor dolore doloremque quod vero sunt ab, culpa cumque nihil voluptatibus, ipsum fugit assumenda maxime sed rerum ea asperiores amet! Consequuntur delectus neque voluptate placeat non!
            </p>
          </div>
        </div>

      </div>
    )
  }
}

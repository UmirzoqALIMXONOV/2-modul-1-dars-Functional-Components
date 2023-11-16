import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default class Product extends Component {

  state={
    product:[
      {id:1},
      {id:2},
      {id:3},
      {id:4},
    ]
  }
  render() {
    return (
      <div>
        {
          this.state.product.map(item=> 
          <div key={item.id} >
               <Link 
                  className='btn btn-outline-dark btn-sm my-1' 
                  to={'/product/'+item.id}
                >
                    InfoProduct
                </Link>
          </div> )
        }
      </div>
    )
  }
}

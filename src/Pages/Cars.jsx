import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Cars extends Component {
    state = {
        cars: [
            { id: 1, name: "Nexia3", year: 2020, mator: "1.6", color: "red", price: "10000$", img:'images/2.jpg' },
            { id: 2, name: "Gentra", year: 2021, mator: "1.5", color: "black", price: "15000$",img:'images/2.jpg' },
            { id: 3, name: "Cobalt", year: 2022, mator: "1.5", color: "white", price: "12000$", img:'images/3.jpg' },
            { id: 4, name: "Lasetti", year: 2019, mator: "1.8", color: "black", price: "11000$",img:'images/4.jpg' }
        ]
    }

  
    render() {
        return (
            <>
                <h2 className='text-danger text-center my-4' >Your best Auto in this site</h2>
                <table className='table table-danger'>
                    <thead>
                        <tr>
                            <th>N0</th>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Motor</th>
                            <th>Color</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cars.map((item, index) =>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.year}</td>
                                    <td>{item.mator}</td>
                                    <td>{item.color}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <Link to={'/cars/' + item.id + "/" + item.name + "/" + item.year + "/" + item.mator + "/" + item.color + "/" + item.price} className='btn btn-info btn-sm'>i</Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    state = {
        Products: [
            {
                id: 1,
                name: "Olma",
                weight: "2kg",
                company: "Korzinka",
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nostrum voluptas quae eum assumenda dolor reiciendis, eaque earum facilis id explicabo temporibus. Iure, voluptatibus optio aliquam obcaecati vitae commodi modi.',
            },
            {
                id: 2,
                name: "Anor",
                weight: "10kg",
                company: "Chorsu",
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nostrum voluptas quae eum assumenda dolor reiciendis, eaque earum facilis id explicabo temporibus. Iure, voluptatibus optio aliquam obcaecati vitae commodi modi.',
            },
            {
                id: 3,
                name: "Uzum",
                weight: "7kg",
                company: "Yangiyol",
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nostrum voluptas quae eum assumenda dolor reiciendis, eaque earum facilis id explicabo temporibus. Iure, voluptatibus optio aliquam obcaecati vitae commodi modi.',
            },
            {
                id: 4,
                name: "Behi",
                weight: "20kg",
                company: "Makro",
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nostrum voluptas quae eum assumenda dolor reiciendis, eaque earum facilis id explicabo temporibus. Iure, voluptatibus optio aliquam obcaecati vitae commodi modi.',
            },
            {
                id: 5,
                name: "Banan",
                weight: "5kg",
                company: "Havas",
                info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nostrum voluptas quae eum assumenda dolor reiciendis, eaque earum facilis id explicabo temporibus. Iure, voluptatibus optio aliquam obcaecati vitae commodi modi.',
            },
        ]
    }

    render() {
        return (
            <div>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>N0</th>
                            <th>Name</th>
                            <th>Weight</th>
                            <th>Company</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Products.map((item, index) =>
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.weight}</td>
                                <td>{item.company}</td>
                                <td>
                                    <Link to={'/product/' + item.id + "/" + item.name + "/" + item.weight + "/" + item.company + "/" + item.info}>
                                        <button className='btn btn-info btn-sm'>i</button>
                                    </Link>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

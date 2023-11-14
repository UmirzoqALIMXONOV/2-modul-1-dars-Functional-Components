import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import Product from './components/Product'
import OneProdicut from './components/OneProdicut'
export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <h2>App</h2>
                <div className="my-2">
                    <Link to={'/'}> <button className='btn btn-success'>HOME</button> </Link>
                    <Link to={'/product'}> <button className='btn btn-success'>Product</button> </Link>
                </div>
                <hr />
                <Switch>
                    <Route path={'/product/:id/:name/:weight/:company/:info'} component={OneProdicut} />
                    <Route path={'/product'} component={Product} />
                </Switch>
            </div>
        )
    }
}

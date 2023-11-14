import React, { Component } from 'react'
export default class Login extends Component {

    state={
        login:"",
        parol:''
    }
    Ceck=()=>{
      
        if(this.state.login !=="" && this.state.parol !=="" ){
            const {history} = this.props
            history.push('/cars')
        }else{
            alert("You must log in to your profile ")
        }
    }

    LoginVal=(e)=>{
        this.setState({
            login:e.target.value
        })
    }
    ParolVal=(e)=>{
        this.setState({
            parol:e.target.value
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4 offset-4">
                    <div className='card '>
                        <div className="card-header">
                            <h4 className='text-center text-success'>Login your Account</h4>
                        </div>
                        <div className="card-body">
                            <div className="my-3">
                                <label>Loginku</label>
                                <input type="text"  value={this.state.login} onChange={this.LoginVal} className='form-control' placeholder='Example@gmail.com' />
                            </div>
                            <div className="my-3">
                                <label>Password</label>
                                <input type="password" value={this.state.parol} onChange={this.ParolVal} className='form-control' placeholder='********' />
                            </div>
                        </div>
                        <div className="card-footer py-3">
                                <button onClick={this.Ceck} className='btn btn-success float-end'>Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Header from './Header';
import { Button } from 'react-bootstrap';
import ManakinBird from '../images/manakin.jpg';
class ComOne extends Component {
    constructor() {
        super();
        this.state = {
            myName: "Muhammad Faizan Mohiuddin",
            email: "faizan@gmail.com",
            myValue: ""
        };
    };

    set_name = () => {
        this.setState({
            myName: this.state.myValue
        })
    }


    get_name = () => {
        console.log(this.state.myName)
    }

    set_value(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.name)
        console.log(e.target.value)
    };


    get_props = (props) => {
        console.log(props)
    }

    render() {
        return (
            <div>
                <Header getProps={this.get_props} name={this.state.myName} page="Navbar page" />

                <h1>Hello World</h1>

                <Button as="a" variant="info">
                    Button as link
                </Button>
                <br /><br />

                {/* <input type="text" placeholder='enter your name' onChange={(e)=>this.setState({myName: e.target.value})}/> <br /><br /> */}
                {/* <input type="text" placeholder='enter your name' onChange={(e) => this.setState({ myValue: e.target.value })} /> <br /><br /> */}

                <input type="text" name='myName' placeholder='enter your name' onChange={(e) => this.set_value(e)} /> <br /><br />
                <input type="text" name='email' placeholder='enter your email' onChange={(e) => this.set_value(e)} /> <br /><br />

                <h3>My name is {this.state.myName} and my email is {this.state.email}</h3>

                {/* <button className='btn btn-primary' onClick={this.set_name}>Set Name</button><br /><br />
                <button className='btn btn-primary' onClick={this.get_name}>Get Name</button><br /><br /> */}

            </div>
        )
    }
}


class Logo extends Component {
    render() {
        return (
            <div>
                <h2>Logo</h2>
                <img src={ManakinBird} alt="Manakin" title='Golden Headed Manakin' width='150px' />
            </div>
        )
    }
}

export { ComOne, Logo };
import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import ManakinBird from '../images/manakin.jpg';
class ComOne extends Component {
    constructor(){
        super();
        this.state = {
            myName: "Muhammad Faizan Mohiuddin",
            email: "faizan@gmail.com"
        };
    };

    set_name = ()=>{
        this.setState({
            myName: "Muhammad Ali"
        })
    }
    
    get_name = ()=>{
        console.log(this.state.myName)
    }
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <Button as="a" variant="info">
                    Button as link
                </Button>
<br /><br />
                <input type="text" placeholder='enter value'/> <br /><br />
                <button className='btn btn-primary' onClick={this.set_name}>Set Name</button><br /><br />
                <button className='btn btn-primary' onClick={this.get_name}>Get Name</button><br /><br />

                <h3>My name is {this.state.myName} and my email is {this.state.email}</h3>
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
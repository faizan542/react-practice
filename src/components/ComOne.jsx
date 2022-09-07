import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class ComOne extends Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <button className='btn btn-primary'>Primary</button> <br /><br />
                <Button as="a" variant="info">
                    Button as link
                </Button>
            </div>
        )
    }
}

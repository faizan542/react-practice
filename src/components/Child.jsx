import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h4>Rs: {this.props.price}</h4>
                <button onClick={() => this.props.getData("faizan")}>Send Data</button>
            </div>
        )
    }
}

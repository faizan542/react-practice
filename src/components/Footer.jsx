import React, { Component } from "react"
class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <h1>Footer</h1>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className="col">One of three columns</div>
                        <div className="col">One of three columns</div>
                        <div className="col">One of three columns</div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col">One of three columns</div>
                        <div className="col">One of three columns</div>
                        <div className="col">One of three columns</div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col">One of three columns</div>
                        <div className="col">One of three columns</div>
                        <div className="col">One of three columns</div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Footer;
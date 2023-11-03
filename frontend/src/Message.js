import React, { Component } from "react";

class Change extends Component {
    constructor() {
        super()
        this.state = {
            message: 'hello shivam'
        }
    }

    changeMe() {
        this.setState({
            message: 'bro this worked'
        })
    }

    render() {
        return (
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMe}>change</button>
        </div>
        )
    }
}

export default Change
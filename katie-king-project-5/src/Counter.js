import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return (
            <div className="scoreCounter">
                <h2>Score: {this.props.currentScore}</h2>
            </div>
        )
    }
}

export default Counter;
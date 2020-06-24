import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return (
            <div className="scoreCounter">
                <h4>Score: {this.props.currentScore}</h4>
            </div>
        )
    }
}

export default Counter;
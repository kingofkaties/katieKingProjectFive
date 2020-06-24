import React, { Component } from 'react';

class Definition extends Component {

    render() {
        // console.log(this.state.words)
        return (
            <div>
                <h2>{this.props.currentWord}</h2>
            </div>
        )
    }
}

export default Definition;


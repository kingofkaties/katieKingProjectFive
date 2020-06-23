import React, { Component } from 'react';

class Definition extends Component {

    render() {
        // console.log(this.state.words)
        return (
            <div>
                <p>{this.props.activeDef}</p>
            </div>
        )
    }
}

export default Definition;


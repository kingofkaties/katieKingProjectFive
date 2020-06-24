import React, { Component } from 'react';

class Definition extends Component {

    render() {
        // console.log(this.state.words)
        return (
            <div>
                <h2>{this.props.defArray[this.props.currentDef]}</h2>
            </div>
        )
    }
}

export default Definition;


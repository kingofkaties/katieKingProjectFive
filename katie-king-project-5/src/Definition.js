import React, { Component } from 'react';

class Definition extends Component {

    render() {
        // console.log(this.state.words)
        return (
            <div>
                <blockquote>"{this.props.defArray[this.props.currentDef]}"</blockquote>
            </div>
        )
    }
}

export default Definition;


import React, { Component } from 'react';

class Definition extends Component {

    render() {

        return (
            <div>
                <blockquote>"{this.props.defArray[this.props.currentDef]}"</blockquote>
            </div>
        )
    }
}

export default Definition;


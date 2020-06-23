import React, { Component, Fragment } from 'react';

class Word extends Component {

    
// add another

    render() {
        return (
            <button value={this.props.word} onClick={(event) => this.props.handleClick(event)}>
                <p>
                    {this.props.word}
                </p>
            </button>
        );
    };
}

export default Word;
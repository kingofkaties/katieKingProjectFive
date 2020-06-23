import React, { Component } from 'react';

class Word extends Component {

    
// add another

    render() {
        return (
            <button value={this.props.word} onClick={this.props.handleWordSelect} class={this.props.className}>
                <h3>
                    {this.props.word}
                </h3>
            </button>        
        );
    };
}

export default Word;
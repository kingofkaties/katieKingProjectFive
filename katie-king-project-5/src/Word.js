import React, { Component } from 'react';

class Word extends Component {

    
// add another

    render() {
        return (
            <button value={this.props.word} onClick={this.props.handleWordSelect} className={this.props.className}>
                {this.props.word}
            </button>        
        );
    };
}

export default Word;
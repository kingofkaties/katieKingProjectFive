import React, { Component, Fragment } from 'react';

class Word extends Component {    

    render() {
        return (
            <button>
                <p>{this.props.word}</p>
            </button>
        );
    };
}

export default Word;
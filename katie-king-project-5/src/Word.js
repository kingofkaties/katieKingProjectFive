import React, { Component, Fragment } from 'react';
import axios from 'axios';
// import Word from './Word';

class Word extends Component {    

    render() {
        return (
            <div>
                <p>{this.state.words[0]}</p>
            </div>
        );
    };
}

export default Word;
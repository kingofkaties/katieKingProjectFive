import React, { Component, Fragment } from 'react';
import axios from 'axios';
// import Word from './Word';

class Word extends Component {

    // constructor(props) {
    //     super(props);
    // };
    
    // console.log(this.props);

    // componentDidMount() {


    // choose 1 word at random and extract definition

    render() {
        return (
            <div>
                <p>{this.props.hwi.hw}</p>
            </div>
        );
    };
}

export default Word;
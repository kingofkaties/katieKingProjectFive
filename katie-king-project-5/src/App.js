import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Definition from './Definition';
import Word from './Word';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    // initialize state with empty values
    this.state = {
      words: [],
      definitions: {}
    };
  }

  // create function to get 4 random words
  callRandomWordApi() {
    axios.get('https://random-word-api.herokuapp.com/word?number=6')
    
      // wait until response comes back
      .then((response) => {

        // store those 4 random words in state
        this.setState({
          words: response.data
        })
        console.log(this.state.words)

        // call M-W function after THEN method
        this.callMerriamWebsterApi();
        }
      )
    }

  // create function to get definitions from randomly generated words stored in state
  callMerriamWebsterApi() {

    // create clone array to store definitions inside while axios loops over each word
    const definitionsClone = {};

    // map over each item inside state.words array
    this.state.words.forEach((word) => {
      axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=876ed444-a30f-40ca-9a52-4d2265921d9d`)

        // wait for response to come back
        .then((response) => {
          // check if word exists in M-W
          if (response.data[0].shortdef) {
            definitionsClone[word] = response.data[0].shortdef[0]
          }
        })
      })

      // update state
      this.setState({

        // push clone array to state
        definitions: definitionsClone
      })
  }

  selectDefinition() {
    console.log('calling functioin!!!')
  }
    
  // when component is called to page...
  componentDidMount() {

    // ...call random word function to generate 4 words & use to populate state.words, then populate state.definitions
    this.callRandomWordApi();
  }
  
  // render elements to the page
  render () {
    return (
      <Fragment>
        <Definition shortdef={this.selectDefinition}/>
        {/* <Definition shortdef={this.state.definitions} /> */}

                {/* use .map to generate 4 Wrod components */}
                {}
      </Fragment>
    );
  }
}

export default App;

// assign correct "item"
// that correct item === the correct item
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
        definitions: {},
        numOfDefs: [],
        activeDef: 0,
        userChoice: ""
      };
    }
    // change on button click
    handleClick = (event) => {
      console.log(event.target.value)
      this.setState({
        userChoice: event.target.value
      })
      if (this.state.userChoice === this.state.activeDef) {
        console.log("You got it right!")
        this.callRandomWordApi();
      } else {
        console.log("You got it wrong!")
        }
      }
    


  // create function to get 4 random words
  callRandomWordApi() {
    axios.get('https://random-word-api.herokuapp.com/word?number=9')
    
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
          console.log(response)
          // check if word exists in M-W
          if (response.data[0].hasOwnProperty('shortdef')){
            definitionsClone[word] = response.data[0].shortdef[0]
          }

          const randomNum = Math.floor(Math.random() * this.state.numOfDefs)

          this.setState({
    
            // push clone array to state
            definitions: definitionsClone,
    
            // count how many keys are in state.definitions object and save to own state
            numOfDefs: Object.keys(this.state.definitions).length,

            // Select a single definition to be active
            activeDef: this.state.words[randomNum]

            // check if key exists inside object - Owen slacked me a resource to investigate - if exiists in definition obj, assigtn to state, if not, something else
          })
        })
      })
  }

  // when component is called to page...
  componentDidMount() {

    // ...call random word function to generate 4 words & use to populate state.words, then populate state.definitions
    this.callRandomWordApi();
  }
  
  // render elements to the page
  render () {

    console.log(this.state.userChoice)
    return (
      <Fragment>

        <Definition activeDef={this.state.definitions[this.state.activeDef]} />
        
        <div className="buttonContainer">
          {this.state.words.map((word, index) => {
            return <Word handleWordSelect={this.handleClick} word={this.state.words[index]} className={`button-${index}`} />
          })}
        </div>      
      </Fragment>
    );
  }
}

export default App;

// assign correct "item"
// that correct item === the correct item
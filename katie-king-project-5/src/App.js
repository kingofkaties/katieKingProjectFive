import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Definition from './Definition';
import Word from './Word';
import Counter from './Counter';
import GameBoard from './GameBoard';
import GameOver from './GameOver';
import './App.css';

class App extends Component {

    constructor(props) {
      super(props);

      // initialize state with empty values
      this.state = {
        words: [],
        definitions: {},
        wordsWithDefs: [],
        numOfDefs: [],
        activeDef: "",
        userChoice: "",
        score: 0,
        gameBoardVisible: "show",
        gameOverVisible: "hide"
      };
    }

  // when component is called to page...
  componentDidMount() {

    // ...call random word function to generate 4 words & use to populate state.words, then populate state.definitions
    this.callRandomWordApi();
  }
    
  // create function to get 8 random words
  callRandomWordApi() {
    axios.get('https://random-word-api.herokuapp.com/word?number=9')
    
    // wait until response comes back
    .then((response) => {
      
      // store those 8 random words in state
      this.setState({
        words: response.data
      })
      
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
        if (response.data[0].hasOwnProperty('shortdef')){

          // if word exists in M-W, add to definitionsClone
          definitionsClone[word] = response.data[0].shortdef[0]

          let wordsWithDefsClone = [...this.state.wordsWithDefs]
          wordsWithDefsClone.push(word)
          this.setState({
            
            // set state with an array that holds only words that have matching definitions
            wordsWithDefs: wordsWithDefsClone,
            
            // push clone array to state
            definitions: definitionsClone,
            
            // count how many keys are in state.definitions object and save to own state
            numOfDefs: Object.keys(this.state.definitions).length,          
          })
        }
        this.getRandomWord();      
      })
    })
  }

  getRandomWord() {
    let randomNum = Math.floor(Math.random() * this.state.numOfDefs)
    let randomKey = this.state.wordsWithDefs[randomNum]

    for (let i = 0; i <= this.state.wordsWithDefs.length; i++) {
      if (this.state.wordsWithDefs[i] === randomKey) {
        this.setState({
          activeDef: randomKey
        })
      }
    }
  }

  // change on button click
  handleClick = (event) => {

    const userChoice = event.target.value;

    if (userChoice === this.state.activeDef) {
      console.log("You got it right!")
      this.setState({
        score: this.state.score + 1, 
        wordsWithDefs: []
      })
      this.callRandomWordApi();
    } else {
      console.log("You got it wrong!")
      this.setState({
        gameBoardVisible: "hide",
        gameOverVisible: "show"
      })
    }
  }

  // render elements to the page
  render () {

  return (
    <Fragment>
      <h1>Word Nerd</h1>

      {/* game board */}
      <div className={this.state.gameBoardVisible}>
        <GameBoard
        // props for Definition.js
        definitionsArray={this.state.definitions}
        currentDefinition={this.state.activeDef}
        // props for Word.js
        wordSelect={this.handleClick}
        wordsArray={this.state.words}
        // props for Counter.js
        score={this.state.score}
        />
      
        {/* game over div */}
        <div className="gameOver hide">
        <h2>Game Over</h2>
        <button className="playAgain">Play Again</button>
        </div>
      </div>

      {/* game over */}
      <div className={this.state.gameOverVisible}>
        <GameOver
        score={this.state.score} />
      </div>
    </Fragment>
  );
  }
}

export default App;

// assign correct "item"
// that correct item === the correct item
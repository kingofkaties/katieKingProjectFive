import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Definition from './Definition';
import Word from './Word';
import Counter from './Counter';
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
        activeDef: 0,
        userChoice: "",
        score: 0
      };
    }

  // when component is called to page...
  componentDidMount() {

    // ...call random word function to generate 4 words & use to populate state.words, then populate state.definitions
    this.callRandomWordApi();
  }
    
  // create function to get 8 random words
  callRandomWordApi() {
    console.log('Successfully called a random word!')
    axios.get('https://random-word-api.herokuapp.com/word?number=9')
    
    // wait until response comes back
    .then((response) => {
      
      // store those 8 random words in state
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

        // console.log(response)
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
          // function getRandomWord() {
            //   // find random number within state.numOfDefs - Math.random()
            //   // save ^ to variable
            //   // if statement -> check if ^ variable is present in state. if not, run the function -- if this word exists, console.log "yes"
            //   // return ^ variable when it matches/is found
            // }
            
            // assign process of getting random # to function - get RandomNumber - include code from 86
            // assign this.state.words[randomNum] to variable
            // if it doesn't exists, run function to get new number
            // make function keep calling itself until it gets something that iis in my definiitions array
            // put ALL this into function - getWord
            // if word !in definitions object, call entire function again
            // return with the final word
            // run if/while statement -> while thiis.state.definitions 
            
            // comment explaining WHY t f I am using 2 APIs
            
            // this.setState({
              //   activeDef: this.state.words[randomNum]
              // })
              // console.log(randomNum, this.state.activeDef)

  getRandomWord() {
    let randomNum = Math.floor(Math.random() * this.state.numOfDefs)
    let randomKey = this.state.wordsWithDefs[randomNum]
    // let arrayFromDefs = Object.keys(this.state.definitions)

    for (let i = 0; i <= this.state.wordsWithDefs.length; i++) {
      console.log(this.state.wordsWithDefs[i])
      if (this.state.wordsWithDefs[i] === randomKey) {
        console.log('match')
        this.setState({
          activeDef: randomKey
        })
        break;
      } else {
        console.log('no match')
      }
    }
    // console.log(randomNum, randomKey, this.state.wordsWithDefs)
    // while (Object.keys(this.state.definitions))

        //   // find random number within state.numOfDefs - Math.random()
        //   // save ^ to variable
        //   // if statement -> check if ^ variable is present in state. if not, run the function -- if this word exists, console.log "yes"
        //   // return ^ variable when it matches/is found

  }

  
    // change on button click
    handleClick = (event) => {

      const userChoice = event.target.value

      if (userChoice === this.state.activeDef) {
        console.log("You got it right!")
        this.setState({
          score: this.state.score + 1, 
        })
        this.callRandomWordApi();
      } else {
        console.log("You got it wrong!")
      }
    }

    // render elements to the page
    render () {

      // console.log('this.state.userChoice', this.state.userChoice)
      // console.log('this.state.activeDef', this.state.activeDef)
      // console.log('this.state.definitions[this.state.activeDef]', this.state.definitions[this.state.activeDef])

    return (
      <Fragment>

        {/* game baord div */}
        <div className="show">
          <h1>Word Nerd</h1>
        
          <Counter score={this.state.score} />
          
          <Definition currentWord={this.state.definitions[this.state.activeDef]} />
          
          <div className="buttonContainer">
          {this.state.words.map((word, index) => {
          return <Word handleWordSelect={this.handleClick} word={this.state.words[index]} className={`button`} />
          })}
          </div>
        </div>   

        {/* game over div */}
        <div className="hide">
          <h2>Game Over</h2>
          <button className="playAgain">Play Again</button>
        </div>   
      </Fragment>
    );
  }
}

export default App;

// assign correct "item"
// that correct item === the correct item
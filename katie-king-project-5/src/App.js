import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Definition from './Definition';
import Word from './Word';
import './App.css';

class App extends Component {

// good idea to keep AJAX calls and state
// keep AJAX data in state and pass down

// handle edge case if word not found, handle edge case is common word - take data out using filter => grab first element of defintion


  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      words: [
        "anti-authoritarianism",
        "dog",
        "bunker",
        "ham"
      ],
      data: []
    };
  }

  buildUrl(word) {
    const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=876ed444-a30f-40ca-9a52-4d2265921d9d`;
    return url;
  }

  callApi() {
    return this.state.words.map((word) => {
      return axios.get(this.buildUrl(word))
    })
  }

  componentDidMount() {

    // save url containing word

    const allWords = this.callApi();
    Promise.all(allWords)
      .then((response) => {
        console.log(response);
        const allWordsData = response.map((res) => {
          return {
            hwi: res.data[0].hwi.hw,
            shortdefs: res.data[0].shortdef[0],
            def: res.data[0].def[0],
            uuid: res.data[0].meta.uuid
          }
        })
            this.setState({
              data: allWordsData
            })
        // this.setState(() => ({
          // hwi: response.data[0].hwi,
          // shortdefs
      })

    // call url through axios
    // axios.get(url)

      // once the call has completed...
      // .then((response) => {
      //   console.log(response.data);
      //   this.setState(() => ({
      //     hwi: response.data[0].hwi,
      //     shortdefs: response.data[0].shortdef
      //   })
      //   )
      // }
      // )
  }
  
  render () {
    // const wordRender = this.state.data.map((currentWord) => {
    //   return (
    //     <Fragment>
    //       <Definition shortdefs={currentWord.shortdefs}/>
    //       <Word hwi={currentWord.hwi} />
    //     </Fragment>
    //   )}
    // )
    console.log(this.state)
    return (
      
      <div>
        {this.state.data.map((currentWord) => {
          return (
              <Fragment >
              <Definition key={currentWord.uuid + Math.random()} shortdefs={currentWord.shortdefs} />
                <Word key={currentWord.uuid + Math.random()} hwi={currentWord.hwi} />
              </Fragment>
          )
        }
        )}
        {/* use .map to generate 4 Wrod components */}
      </div>
    );
  }
}

export default App;

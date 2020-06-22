// COMPONENTS:

// App.js

// create array to hold 4 random words from Random Word API
// componentDidMount(): call Random Word API to get 4 words and store in ^ array
// pass array index as props down to Word.js
// Math.random() to grab 1 word from array stored in App.js and save that word to variable
// check if ^ variable returns standard definition page or "word not found" page from API
// if "word not found" page, Math.random() again to grab different word from array
// pass ^ variable as props to Definition.js

// Word.js x4
// componentDidMount(): pass each array value into Merriam-Webster API url to retrieve object info x4, store in new object
// render(): JSX button containing path to word stored in App.js array
// check if button definition === definition from Definition.js
// if ^ true, new call to Random Word API and repeat previous steps
// if ^ false, render GAME OVER page

// Definition.js
// render(): JSX div containing path to definition of word from ^ variable
// receive new props depending on true/false from Word.js user interaction



// random words should be stored in state
// .setState()
// feature calls based on a function => "get another word" API method call
// first API call will be on functionDidMount()




// request several words from Merriam-Webster API and put into an array
// for loop to display each array item as button on the page
// choose a random word from the above array and display its definition on the page
// when user clicks on button, check if that word matches the definition
// if user-selected word matches definition, add +1 to user score
// make another pull from API and create a new array, repeating previous steps
// if user-selected word does NOT match definition, GAME OVER screen and display current score, also with "play again" button
// if user clicks "play again", reset user score and repeat above steps

// what components am I working with
// answer buttons
// definition
// am I keeping track of state changes? refer to that in pseudocode

// eg. compare user choice - use state. original choice vs choice user made?
// how will I keep track of changing state

// when user chooses answer: how to determine whether another question should be displayed? how to indicate that component should rerender?

// call to API - which component is that happening in? which lifecycle method?

// review rijksmuseum codealong and parks codealong

// DESC OF PROJECT

A word game where the user has to guess which word matches the definition.

// MVP

1. user is presented with 1 definition and multiple words from Merriam - Webster API, has to guess which word the definition belongs to.User clicks on a word and if correct, is presented with a new definition and the next set of words.
2. If user gets a word wrong, present GAME OVER component.

// STRETCH

1. Use Firebase to set up a leaderboard of top scores
2. Only use really big words(filter out obvious answers)
3. keep all previous words on the page and fill in missing definitions—move to next question with auto - scroll
4. option to scroll through alternate definitions(if available on a single word)

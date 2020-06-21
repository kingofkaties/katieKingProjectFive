
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
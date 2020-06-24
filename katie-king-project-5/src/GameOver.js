import React, { Component, Fragment } from 'react';
import Counter from './Counter';

class GameOver extends Component {

    render() {
        return (
            <Fragment>
                <h5>Game Over</h5>
                <Counter currentScore={this.props.score}/>
                <button className="playAgain">Play Again</button>
            </Fragment>
        )
    }
}

export default GameOver;
import React, { Component, Fragment } from 'react';
import Counter from './Counter';

class GameOver extends Component {

    handleClick() {
        window.location.reload();
    }

    render() {
        return (
            <Fragment>
                <h3>Game Over</h3>
                <Counter currentScore={this.props.score}/>
                <button onClick={this.handleClick}>play again</button>
            </Fragment>
        )
    }
}

export default GameOver;
import React, { Component, Fragment } from 'react';
import Definition from './Definition';
import Counter from './Counter';
import Word from './Word';

class GameBoard extends Component {

    render() {
        return (
            <Fragment>
                <Counter currentScore={this.props.score} />
            
                <Definition defArray={this.props.definitionsArray} currentDef={this.props.currentDefinition} />
                
                <div className="buttonContainer">
                    {this.props.wordsArray.map((word, index) => {
                        return <Word handleWordSelect={this.props.wordSelect} word={this.props.wordsArray[index]} className={`button${[index]}`} />
                    })}
                </div>

            </Fragment>

        )
    }
}

export default GameBoard;
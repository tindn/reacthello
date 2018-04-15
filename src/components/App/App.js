import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';
import './App.css';
import Board from '../Board';

class App extends React.Component {
  render() {
    const nextPlayer = this.props.nextPlayColor === 'black' ? '1' : '2';
    const numberOfWhitePieces = this.props.gamePieces.filter(
      piece => piece === 'white'
    ).length;
    const numberOfBlackPieces = this.props.gamePieces.filter(
      piece => piece === 'black'
    ).length;
    const numberOfPossibleMoves = this.props.captures.filter(
      capture => capture.length
    ).length;
    const gameEnded =
      this.props.gamePieces.filter(piece => !piece).length === 0;
    if (gameEnded) {
      setTimeout(() => {
        if (
          window.confirm(
            `Thank you for playing.\nPlayer 1: ${numberOfBlackPieces} pieces.\nPlayer 2: ${numberOfWhitePieces} pieces.\nPlayer ${
              numberOfBlackPieces > numberOfWhitePieces ? '1' : '2'
            } is the winner!\nStart a new game?`
          )
        ) {
          this.props.resetGame();
        }
      }, 500);
    }
    if (!numberOfPossibleMoves && !gameEnded) {
      setTimeout(() => {
        window.alert(
          `No moves available for Player ${nextPlayer}. Skipping turn...`
        );
      }, 500);
      setTimeout(() => {
        this.props.skipPlayer();
      }, 1500);
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reacthello</h1>
          <form className="config-form">
            <input
              type="checkbox"
              checked={this.props.debugMode}
              onChange={this.props.toggleDebugMode}
            />Debug Mode
          </form>
        </header>
        <div>
          <div>
            Player 1: {numberOfBlackPieces} x black{' '}
            {this.props.nextPlayColor === 'black' ? 'Next' : ''}
          </div>
          <div>
            Player 2: {numberOfWhitePieces} x white{' '}
            {this.props.nextPlayColor === 'white' ? 'Next' : ''}
          </div>
          {this.props.debugMode ? (
            <div>Possible Moves: {numberOfPossibleMoves}</div>
          ) : null}
        </div>
        <Board boardSize={this.props.boardSize} />
      </div>
    );
  }
}

App.propTypes = {
  boardSize: PropTypes.number.isRequired,
  toggleDebugMode: PropTypes.func,
  debugMode: PropTypes.bool.isRequired,
  nextPlayColor: PropTypes.string.isRequired,
  gamePieces: PropTypes.array.isRequired,
  captures: PropTypes.array.isRequired,
  skipPlayer: PropTypes.func,
  resetGame: PropTypes.func,
};

export default App;

import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';
import './App.css';
import Board from '../Board';

class App extends React.Component {
  render() {
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
    if (!numberOfPossibleMoves && !gameEnded) {
      setTimeout(() => {
        this.props.skipPlayer();
      }, 2000);
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
};

export default App;

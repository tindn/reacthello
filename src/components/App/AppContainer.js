import { connect } from 'react-redux';
import App from './App';
import {
  toggleDebugMode,
  skipPlayer,
  resetGame,
  setGamePlay,
  togglePlayAgainstComputer,
} from '../../state/actions';
const mapStateToProps = state => ({
  boardSize: state.App.boardSize,
  debugMode: state.App.debugMode,
  nextPlayColor: state.App.nextPlayColor,
  gamePieces: state.App.gamePieces,
  captures: state.App.captures,
  playAgainstComputer: state.App.playAgainstComputer,
});

const mapDispatchToProps = dispatch => ({
  toggleDebugMode: () => {
    dispatch(toggleDebugMode);
  },
  skipPlayer: () => {
    dispatch(skipPlayer);
  },
  resetGame: () => {
    dispatch(resetGame);
  },
  setGamePlay: (index, captures) => {
    dispatch(setGamePlay(index, captures));
  },
  togglePlayAgainstComputer: () => {
    dispatch(togglePlayAgainstComputer);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

import { connect } from 'react-redux';
import App from './App';
import { toggleDebugMode, skipPlayer, resetGame } from '../../state/actions';
const mapStateToProps = state => ({
  boardSize: state.App.boardSize,
  debugMode: state.App.debugMode,
  nextPlayColor: state.App.nextPlayColor,
  gamePieces: state.App.gamePieces,
  captures: state.App.captures,
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
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

import { connect } from 'react-redux';
import App from './App';
import { toggleDebugMode } from '../../state/actions';
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
    dispatch({ type: 'SKIP_PLAYER' });
  },
  resetGame: () => {
    dispatch({ type: 'RESET_GAME' });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

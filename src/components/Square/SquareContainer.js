import { connect } from 'react-redux';
import Square from './Square';
import { setGamePlay } from '../../state/actions';

const mapStateToProps = (state, ownProps) => ({
  gamePiece: state.App.gamePieces[ownProps.index],
  captures: state.App.captures[ownProps.index],
  debugMode: state.App.debugMode,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setGamePlay: captures => {
    dispatch(setGamePlay(ownProps.index, captures));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Square);

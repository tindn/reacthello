import { connect } from 'react-redux';
import Square from './Square';
import { setGamePlay } from '../../state/actions';
import { getCaptures } from '../../logic';

const mapStateToProps = (state, ownProps) => ({
  gamePiece: state.App.gamePieces[ownProps.index],
  captures: getCaptures(ownProps.index, state.App),
  debugMode: state.App.debugMode,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setGamePlay: captures => {
    dispatch(setGamePlay(ownProps.index, captures));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Square);

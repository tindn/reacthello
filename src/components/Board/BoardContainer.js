import { connect } from 'react-redux';
import Board from './Board';
const mapStateToProps = state => ({
  size: state.App.boardSize,
});
export default connect(mapStateToProps, null)(Board);

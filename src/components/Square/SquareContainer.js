import { connect } from 'react-redux';
import Square from './Square';
const mapStateToProps = state => ({
  gamePieces: state.App.gamePieces,
});
export default connect(mapStateToProps, null)(Square);

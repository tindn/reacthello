import { connect } from 'react-redux';
import App from './App';
import { toggleDebugMode } from '../../state/actions';
const mapStateToProps = state => ({
  debugMode: state.App.debugMode,
});

const mapDispatchToProps = dispatch => ({
  toggleDebugMode: () => {
    dispatch(toggleDebugMode);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

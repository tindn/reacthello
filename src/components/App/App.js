import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';
import './App.css';
import Board from '../Board';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Reacthello</h1>
          <form>
            Debug:{' '}
            <input
              type="checkbox"
              checked={this.props.debugMode}
              onClick={this.props.toggleDebugMode}
            />
          </form>
        </header>

        <Board />
      </div>
    );
  }
}

App.propTypes = {};

export default App;

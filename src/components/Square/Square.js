import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';
import GamePiece from '../GamePiece';

class Square extends React.Component {
  render() {
    console.log('square render');
    return (
      <div
        className={`square col-${this.props.column} row-${this.props.row} ${
          (this.props.index + this.props.row) % 2 === 0 ? 'darker' : ''
        }`}
        onClick={() => {
          if (this.props.gamePiece || !this.props.captures.length) {
            return;
          }
          this.props.setGamePlay(this.props.captures);
        }}
      >
        <GamePiece color={this.props.gamePiece || 'transparent'} />
        {this.props.debugMode
          ? `${this.props.index},
          ${this.props.captures.length}`
          : null}
      </div>
    );
  }
}

Square.propTypes = {
  index: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  gamePiece: PropTypes.any,
  setGamePlay: PropTypes.func.isRequired,
  captures: PropTypes.array.isRequired,
  debugMode: PropTypes.bool.isRequired,
};

export default Square;

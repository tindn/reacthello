import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';
import GamePiece from '../GamePiece';

class Square extends React.Component {
  render() {
    console.log('square render');
    const shadeClass =
      (this.props.index + this.props.row) % 2 === 0 ? 'darker' : '';
    const hint = this.props.captures.length ? 'legal' : 'illegal';
    const hintClass = !this.props.gamePiece
      ? `hint-${hint} ${this.props.nextPlayColor}`
      : '';
    return (
      <div
        className={`square col-${this.props.column} row-${
          this.props.row
        } ${shadeClass} ${hintClass}`}
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
  nextPlayColor: PropTypes.string.isRequired,
};

export default Square;

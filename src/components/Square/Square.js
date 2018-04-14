import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';
import GamePiece from '../GamePiece';

const Square = props => {
  const gamePiece = props.gamePieces.find(piece => piece.index === props.index);
  return (
    <div
      className={`square col-${props.column} row-${props.row} ${
        (props.index + props.row) % 2 === 0 ? 'darker' : ''
      }`}
    >
      {/* {props.index} */}
      {gamePiece ? <GamePiece color={gamePiece.color} /> : null}
    </div>
  );
};

Square.propTypes = {
  index: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  row: PropTypes.number.isRequired,
  gamePieces: PropTypes.array.isRequired,
};

export default Square;

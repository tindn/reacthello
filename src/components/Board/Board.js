import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import Square from '../Square';

const Board = props => {
  const size = props.size || 8;
  const numberOfSquares = size ** 2;
  let squares = [];
  for (var i = 0; i < numberOfSquares; i++) {
    squares.push(
      <Square
        key={i}
        index={i}
        column={getColumnNumber(i, size)}
        row={getRowNumber(i, size)}
      />
    );
  }
  return <div className={`Board row-of-${size}`}>{squares}</div>;
};

Board.propTypes = {
  size: PropTypes.number,
};

const getRowNumber = (index, size) => Math.floor(index / size) + 1;

const getColumnNumber = (index, size) => index % size + 1;

export default Board;

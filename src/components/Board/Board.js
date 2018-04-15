import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import Square from '../Square';
import { getColumnNumber, getRowNumber } from '../../logic';

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

export default Board;

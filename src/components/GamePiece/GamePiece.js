import React from 'react';
import PropTypes from 'prop-types';
import './GamePiece.css';

const GamePiece = props => <div className={`gamepiece color-${props.color}`} />;

GamePiece.propTypes = {
  color: PropTypes.string.isRequired,
};

export default GamePiece;

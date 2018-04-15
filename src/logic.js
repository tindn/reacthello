export const getRowNumber = (index, size) => Math.floor(index / size);

export const getColumnNumber = (index, size) => index % size;

export const getCaptures = (index, appState) => {
  let captures = [];
  ['NW', 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W'].forEach(direction => {
    captures = captures.concat(
      getCapturesForDirection(index, direction, appState)
    );
  });
  return captures;
};

export const getCapturesForDirection = (index, direction, appState) => {
  const { gamePieces, boardSize, nextPlayColor } = appState;
  let nextIndex = moveOne(index, boardSize, direction);
  let nextPiece = gamePieces[nextIndex];
  if (!nextPiece) {
    return [];
  }
  if (nextPiece === nextPlayColor) {
    return [];
  }
  let captures = [];
  do {
    captures.push(nextIndex);
    nextIndex = moveOne(nextIndex, boardSize, direction);
    nextPiece = gamePieces[nextIndex];
    if (nextPiece === nextPlayColor) {
      return captures;
    }
  } while (nextPiece);
  return [];
};

export const moveOne = (startingIndex, boardSize, direction) => {
  const row = getRowNumber(startingIndex, boardSize);
  const column = getColumnNumber(startingIndex, boardSize);
  if (row === 0 && direction.indexOf('N') !== -1) {
    return -1;
  }

  if (row === boardSize - 1 && direction.indexOf('S') !== -1) {
    return -1;
  }

  if (column === 0 && direction.indexOf('W') !== -1) {
    return -1;
  }

  if (column === boardSize - 1 && direction.indexOf('E') !== -1) {
    return -1;
  }
  switch (direction) {
    case 'NW':
      return startingIndex - boardSize - 1;
    case 'N':
      return startingIndex - boardSize;
    case 'NE':
      return startingIndex - boardSize + 1;
    case 'E':
      return startingIndex + 1;
    case 'SE':
      return startingIndex + boardSize + 1;
    case 'S':
      return startingIndex + boardSize;
    case 'SW':
      return startingIndex + boardSize - 1;
    case 'W':
      return startingIndex - 1;
    default:
      return -1;
  }
};

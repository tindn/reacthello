export const getRowNumber = (index, size) => Math.floor(index / size) + 1;

export const getColumnNumber = (index, size) => index % size + 1;

export const getCaptures = (index, appState) => {
  const directions = ['NW', 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W'];
  let captures = [];
  directions.forEach(direction => {
    let directionCaptures = getCapturesForDirection(index, direction, appState);
    if (directionCaptures.length) {
      captures = directionCaptures;
      return;
    }
  });
  return captures;
};

export const getCapturesForDirection = (index, direction, appState) => {
  const { gamePieces, boardSize, nextPlayColor } = appState;
  let captures = [];
  let nextIndex = moveOne(index, boardSize, direction);
  let nextPiece = gamePieces[nextIndex];
  if (!nextPiece) {
    return [];
  }
  if (nextPiece === nextPlayColor) {
    return [];
  }
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
      return false;
  }
};

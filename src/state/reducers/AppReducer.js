const DEFAULT_STATE = {
  boardSize: 8,
  gamePieces: [
    { index: 27, color: 'white' },
    { index: 28, color: 'black' },
    { index: 35, color: 'black' },
    { index: 36, color: 'white' },
  ],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

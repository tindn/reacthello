export const setGamePlay = (index, captures) => ({
  type: 'GAME_PLAY_OCCURRED',
  index,
  captures,
});

export const toggleDebugMode = {
  type: 'TOGGLE_DEBUG_MODE',
};

export const skipPlayer = {
  type: 'SKIP_PLAYER',
};

export const resetGame = {
  type: 'RESET_GAME',
};

export const togglePlayAgainstComputer = {
  type: 'TOGGLE_PLAY_AGAINST_COMPUTER',
};

export const setGamePlay = (index, captures) => ({
  type: 'GAME_PLAY_OCCURRED',
  index,
  captures,
});

export const toggleDebugMode = {
  type: 'TOGGLE_DEBUG_MODE',
};

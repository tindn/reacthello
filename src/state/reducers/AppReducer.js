import { getCaptures } from '../../logic';

const addCapturesToState = state => {
  const captures = state.gamePieces.map((piece, index) => {
    if (piece) {
      return [];
    }
    return getCaptures(index, state);
  });
  return { ...state, captures };
};

const gamePieces = Array(8 ** 2).fill(false);
gamePieces[27] = 'white';
gamePieces[28] = 'black';
gamePieces[35] = 'black';
gamePieces[36] = 'white';

const DEFAULT_STATE = addCapturesToState({
  boardSize: 8,
  gamePlays: [],
  nextPlayColor: 'black',
  debugMode: false,
  playAgainstComputer: true,
  gamePieces,
});

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GAME_PLAY_OCCURRED':
      const newPieces = [...state.gamePieces];
      newPieces[action.index] = state.nextPlayColor;
      action.captures.forEach(capture => {
        newPieces[capture] = state.nextPlayColor;
      });
      const newPlays = [...state.gamePlays];
      newPlays.push(action.index);
      const newColor = state.nextPlayColor === 'black' ? 'white' : 'black';
      return addCapturesToState({
        ...state,
        gamePieces: newPieces,
        gamePlays: newPlays,
        nextPlayColor: newColor,
      });
    case 'TOGGLE_DEBUG_MODE':
      return {
        ...state,
        debugMode: !state.debugMode,
      };
    case 'SKIP_PLAYER':
      return addCapturesToState({
        ...state,
        nextPlayColor: state.nextPlayColor === 'black' ? 'white' : 'black',
      });
    case 'RESET_GAME':
      return DEFAULT_STATE;
    case 'TOGGLE_PLAY_AGAINST_COMPUTER':
      return {
        ...state,
        playAgainstComputer: !state.playAgainstComputer,
      };
    default:
      return state;
  }
};
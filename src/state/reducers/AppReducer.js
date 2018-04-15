import { getCaptures } from '../../logic';

const DEFAULT_STATE = {
  boardSize: 8,
  gamePlays: [],
  nextPlayColor: 'black',
  debugMode: false,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case '@@INIT':
      const gamePieces = Array(state.boardSize ** 2).fill(false);
      gamePieces[27] = 'white';
      gamePieces[28] = 'black';
      gamePieces[35] = 'black';
      gamePieces[36] = 'white';
      return addCapturesToState({ ...state, gamePieces });
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
      const newGamePieces = Array(state.boardSize ** 2).fill(false);
      newGamePieces[27] = 'white';
      newGamePieces[28] = 'black';
      newGamePieces[35] = 'black';
      newGamePieces[36] = 'white';
      return addCapturesToState({
        ...DEFAULT_STATE,
        gamePieces: newGamePieces,
      });
    default:
      return state;
  }
};

const addCapturesToState = state => {
  const captures = state.gamePieces.map((piece, index) => {
    if (piece) {
      return [];
    }
    return getCaptures(index, state);
  });
  return { ...state, captures };
};

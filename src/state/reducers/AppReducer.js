import { getCaptures } from '../../logic';

const DEFAULT_STATE = {
  boardSize: 8,
  gamePlays: [],
  nextPlayColor: 'black',
  debugMode: true,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case '@@INIT':
      const gamePieces = Array(state.boardSize ** 2).fill(false);
      gamePieces[13] = 'white';
      gamePieces[16] = 'white';
      gamePieces[17] = 'white';
      gamePieces[18] = 'white';
      gamePieces[19] = 'white';
      gamePieces[20] = 'white';
      gamePieces[21] = 'white';
      gamePieces[24] = 'black';
      gamePieces[25] = 'white';
      gamePieces[26] = 'white';
      gamePieces[27] = 'white';
      gamePieces[28] = 'white';
      gamePieces[29] = 'white';
      gamePieces[30] = 'white';
      gamePieces[31] = 'white';
      gamePieces[32] = 'black';
      gamePieces[33] = 'black';
      gamePieces[34] = 'white';
      gamePieces[35] = 'white';
      gamePieces[36] = 'white';
      gamePieces[37] = 'white';
      gamePieces[38] = 'white';
      gamePieces[39] = 'white';
      gamePieces[40] = 'black';
      gamePieces[41] = 'white';
      gamePieces[42] = 'black';
      gamePieces[43] = 'white';
      gamePieces[44] = 'black';
      // gamePieces[45] = 'black';
      gamePieces[45] = 'white';
      // gamePieces[46] = 'black';
      gamePieces[47] = 'white';
      gamePieces[48] = 'black';
      gamePieces[49] = 'white';
      gamePieces[50] = 'white';
      gamePieces[51] = 'black';
      gamePieces[52] = 'white';
      gamePieces[53] = 'black';
      gamePieces[54] = 'black';
      gamePieces[55] = 'white';
      gamePieces[56] = 'white';
      gamePieces[57] = 'white';
      gamePieces[58] = 'white';
      gamePieces[59] = 'white';
      gamePieces[60] = 'white';
      gamePieces[61] = 'white';
      gamePieces[62] = 'white';
      gamePieces[63] = 'white';

      // gamePieces[27] = 'white';
      // gamePieces[28] = 'black';
      // gamePieces[35] = 'black';
      // gamePieces[36] = 'white';
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

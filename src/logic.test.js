import * as logic from './logic';

describe('move one normal', () => {
  test('NW', () => {
    expect(logic.moveOne(9, 8, 'NW')).toBe(0);
  });
  test('N', () => {
    expect(logic.moveOne(9, 8, 'N')).toBe(1);
  });
  test('NE', () => {
    expect(logic.moveOne(9, 8, 'NE')).toBe(2);
  });
  test('E', () => {
    expect(logic.moveOne(9, 8, 'E')).toBe(10);
  });
  test('SE', () => {
    expect(logic.moveOne(9, 8, 'SE')).toBe(18);
  });
  test('S', () => {
    expect(logic.moveOne(9, 8, 'S')).toBe(17);
  });
  test('SW', () => {
    expect(logic.moveOne(9, 8, 'SW')).toBe(16);
  });
  test('W', () => {
    expect(logic.moveOne(9, 8, 'W')).toBe(8);
  });
});

describe('get captures for direction', () => {
  const gamePieces = Array(64).fill(false);
  gamePieces[27] = 'white';
  gamePieces[28] = 'black';
  gamePieces[35] = 'black';
  gamePieces[36] = 'white';
  test('1 capture', () => {
    expect(
      logic.getCapturesForDirection(
        19,

        'S',
        {
          gamePieces: gamePieces,
          boardSize: 8,
          nextPlayColor: 'black',
        }
      )
    ).toEqual([27]);
  });
  test('no captures - empty direction', () => {
    expect(
      logic.getCapturesForDirection(
        1,

        'N',
        {
          gamePieces: gamePieces,
          boardSize: 8,
          nextPlayColor: 'black',
        }
      )
    ).toEqual([]);
  });
  test('no captures - same color', () => {
    expect(
      logic.getCapturesForDirection(
        20,

        'S',
        {
          gamePieces: gamePieces,
          boardSize: 8,
          nextPlayColor: 'black',
        }
      )
    ).toEqual([]);
  });
  test('no captures - no cap', () => {
    expect(
      logic.getCapturesForDirection(
        18,

        'SE',
        {
          gamePieces: gamePieces,
          boardSize: 8,
          nextPlayColor: 'black',
        }
      )
    ).toEqual([]);
  });
  gamePieces[19] = 'white';
  test('2 captures', () => {
    expect(
      logic.getCapturesForDirection(11, 'S', {
        gamePieces: gamePieces,
        boardSize: 8,
        nextPlayColor: 'black',
      })
    ).toEqual([19, 27]);
  });
});

# Postmortem

As of commit [1e22d5b021146e8e8c1fa3ad0aac49e9e67d5a1e](https://github.com/tindn/reacthello/commit/1e22d5b021146e8e8c1fa3ad0aac49e9e67d5a1e), the game took 9.5 hours to build.

The commit at the 8th hour mark is [b8da3738cc12e20f982ccd742db315df9e313694](https://github.com/tindn/reacthello/commit/b8da3738cc12e20f982ccd742db315df9e313694). the game was working; however, the styles weren't looking great, and a lot of debug information was still around.

In addition, I was building the game with the assumption of 2 human players
instead of playing vs the computer, therefore, the game was expecting human input
for player 2.

I took an additional hour and a half to clean up the styles and adding
the ability to switch back and forth between human and computer player.

## Improvements

As of commit [1e22d5b021146e8e8c1fa3ad0aac49e9e67d5a1e](https://github.com/tindn/reacthello/commit/1e22d5b021146e8e8c1fa3ad0aac49e9e67d5a1e),
the game is still quite rough. Here are possible improvements:

* Use [reselect](https://github.com/reactjs/reselect) to reduce unnecessary renderings.
* Right now, many "automatic" actions such as switching sides when no moves are
  available, ending the game, and automatic move by the computer are handled in
  the lifecycle of App component. This is very much less than ideal. A side effect
  library such as [redux-saga](https://redux-saga.js.org/) should be used for these.
  Redux saga has the ability to observe on actions which will work very well for
  the automatic actions mentioned above.
* When playing against the computer, the game is picking up the first possible move
  available from an array, which is built from a static ordered list of directions.
  This is predictable, and not fun. This can be improved by (a) randomizing the moves
  or (b) picking out moves with the most captures (effectively setting a "hard"
  mode for computer player).

## Pitfalls

As stated earlier, I began with the assumption of 2 human players. The game could
have been simpler if it was just 1 human player. However, having 2 human players
is more flexible.

I should have considered using a side-effect library from the beginning. This
could have prevented dispatching actions from within the render method of App.
This is quite gross, and unpredictable.

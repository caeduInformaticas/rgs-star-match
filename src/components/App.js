import React, { useState } from 'react';

import Game from './Game';

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  const callStartNewGame = () => setGameId(gameId + 1);
  return <Game key={gameId} startNewGame={callStartNewGame} />;
};

export default StarMatch;

import React from 'react';

import PlayerMove from '../PlayerMove/PlayerMove';
import styles from './PlayerMoves.css';

const playerMoves = props => {
  const moves = props.history.map((move, index) => (
    <PlayerMove key={index} move={move.move} winner={move.winner} />
  ));

  return <div className={styles.PlayerMoves}>{moves}</div>;
};

export default playerMoves;

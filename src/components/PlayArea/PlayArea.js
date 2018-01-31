import React from 'react';

import GameInfo from '../GameInfo/GameInfo';
import PlayAreaHalf from '../PlayAreaHalf/PlayAreaHalf';
import styles from './PlayArea.css';

const playArea = props => {
  const board = props.players.map(player => (
    <PlayAreaHalf
      key={player.type}
      type={player.type}
      name={player.name}
      moveHistory={player.moves}
    />
  ));

  return (
    <div className={styles.PlayArea}>
      {board} <GameInfo />
    </div>
  );
};

export default playArea;

import React from 'react';

import PlayerMoves from '../PlayerMoves/PlayerMoves';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import styles from './PlayAreaHalf.css';

const playAreaHalf = props => {
  return (
    <div className={styles[props.type]}>
      <PlayerMoves history={props.moveHistory} />
      <PlayerInfo name={props.name} />
    </div>
  );
};

export default playAreaHalf;

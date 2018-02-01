import React from 'react';

import Option from '../Option/Option';
import styles from './PlayerMove.css';

const playerMove = props => {
  const outcome = !props.winner ? (
    <div className={styles.losingMove}>X</div>
  ) : null;

  return (
    <div className={styles.PlayerMove}>
      <Option option={props.move} />
      {outcome}
    </div>
  );
};

export default playerMove;

import React from 'react';

import Option from '../Option/Option';
import styles from './PlayerMove.css';

const playerMove = props => {
  return (
    <div className={styles.PlayerMove}>
      <Option option={props.move} />
    </div>
  );
};

export default playerMove;

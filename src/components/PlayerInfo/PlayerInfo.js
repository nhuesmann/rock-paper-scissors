import React from 'react';

import styles from './PlayerInfo.css';

const playerInfo = props => {
  return <div className={styles.PlayerInfo}>{props.name}</div>;
};

export default playerInfo;

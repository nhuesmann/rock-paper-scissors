import React from 'react';

import Option from '../Option/Option';
import styles from './OptionButton.css';

const optionButton = props => {
  return (
    <button className={styles.OptionButton} href="#" onClick={props.onClick}>
      <Option option={props.option} />
    </button>
  );
};

export default optionButton;

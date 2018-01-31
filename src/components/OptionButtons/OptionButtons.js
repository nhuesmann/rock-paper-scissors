import React from 'react';

import OptionButton from '../OptionButton/OptionButton';
import styles from './OptionButtons.css';

const optionButtons = props => {
  const options = ['rock', 'paper', 'scissors']; // props.options

  const buttons = options.map(option => (
    <OptionButton
      key={option}
      option={option}
      onClick={() => props.onClick(option)}
    />
  ));

  return <div className={styles.OptionButtons}>{buttons}</div>;
};

export default optionButtons;

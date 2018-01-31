import React from 'react';

const option = props => {
  let optionImage;

  switch (props.option) {
    case 'rock':
      optionImage = 'fa fa-hand-rock-o';
      break;
    case 'paper':
      optionImage = 'fa fa-hand-paper-o';
      break;
    case 'scissors':
      optionImage = 'fa fa-hand-scissors-o';
      break;
    default:
      break;
  }

  return <i className={optionImage} />;
};

export default option;

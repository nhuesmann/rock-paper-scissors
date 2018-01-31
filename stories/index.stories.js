import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import OptionButton from '../src/components/OptionButton/OptionButton';
import OptionButtons from '../src/components/OptionButtons/OptionButtons';

// storiesOf('Welcome', module).add('to Storybook', () => (
//   <Welcome showApp={linkTo('Button')} />
// ));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));

storiesOf('OptionButton', module)
  .add('rock', () => <OptionButton option="rock" onClick={action('clicked')} />)
  .add('paper', () => (
    <OptionButton option="paper" onClick={action('clicked')} />
  ))
  .add('scissors', () => (
    <OptionButton option="scissors" onClick={action('clicked')} />
  ));

storiesOf('OptionButtons', module).add('container', () => <OptionButtons />);

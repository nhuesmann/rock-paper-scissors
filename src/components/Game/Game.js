import React, { Component } from 'react';

import PlayArea from '../PlayArea/PlayArea';
import OptionButtons from '../OptionButtons/OptionButtons';
// import Aux from '../Aux/Aux';
import styles from './Game.css';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: {
        type: 'player',
        name: 'Player',
        moves: [],
      },
      opponent: {
        type: 'opponent',
        name: 'Opponent',
        moves: [],
        /*
        {
          move: 'rock',
          winner: false,
        }
        */
      },
      tie: false,
      winner: false,
    };

    this.handleOptionClick = this.handleOptionClick.bind(this);
  }

  handleOptionClick(choice) {
    /* random opponent choice */
    const options = ['rock', 'paper', 'scissors'];
    const opponentChoice = options[Math.floor(Math.random() * 3)];

    const winner = this.calculateRoundWinner(choice, opponentChoice);

    if (!winner) {
      return this.setState({ ...this.state, tie: true });
    }

    const loser = winner === 'player' ? 'opponent' : 'player';

    const turn = {
      player: {
        move: choice,
      },
      opponent: {
        move: opponentChoice,
      },
    };

    turn[winner].winner = true;
    turn[loser].winner = false;

    const player = { ...this.state.player };
    player.moves.push(turn.player);

    const opponent = { ...this.state.opponent };
    opponent.moves.push(turn.opponent);

    this.setState({ player, opponent });

    /* real click handler */

    // let player = { ...this.state.player };
    // player.moves.push(choice);

    // this.setState({ player, ...this.state });
  }

  calculateRoundWinner(playerChoice, opponentChoice) {
    let roundWinner;

    if (playerChoice === opponentChoice) {
      return roundWinner;
    }

    switch (playerChoice) {
      case 'rock':
        roundWinner = opponentChoice === 'paper' ? 'opponent' : 'player';
        break;
      case 'paper':
        roundWinner = opponentChoice === 'scissors' ? 'opponent' : 'player';
        break;
      case 'scissors':
        roundWinner = opponentChoice === 'rock' ? 'opponent' : 'player';
        break;
      default:
        break;
    }

    return roundWinner;
  }

  render() {
    const players = [{ ...this.state.player }, { ...this.state.opponent }];

    return (
      <div className={styles.Game}>
        <PlayArea players={players} tie={this.state.tie} />
        <OptionButtons onClick={this.handleOptionClick} />
      </div>
    );
  }
}

export default Game;

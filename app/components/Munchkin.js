/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react';
import Desk from '../components/desk';
import Enemies from '../components/enemies';
import Battle from '../components/battle';
import Player from '../components/player';
import HandCards from '../components/handCards';
import _ from 'lodash';

class Munchkin extends Component {
  render () {
    const {
      turn, giveOut, putOn, cut, takeRace, takeKlass, deck, player
    } = this.props;

    const doors = _.shuffle(deck.filter(card => card.door === true));
    const treasures = _.shuffle(deck.filter(card => card.door === false));
    const desk = { player };
    return (
      <div className='app'>
        <h2 className='text-center'>Munchkin</h2>
        <Desk
          desk={desk}
        />
        <Enemies
          cards={deck}
          enemies={player}
        />
        <Battle
          doors={doors}
          treasures={treasures}
          turn={player.turn}
          playerTotal={player.stats.lvl + player.stats.bonus}
        />
        <Player
          player={player}
          turn={turn}
        />
        <HandCards
          player={player}
          deck={deck}
          giveOut={giveOut}
          cut={cut}
          takeRace={takeRace}
          putOn={putOn}
          takeKlass={takeKlass}
        />
      </div>
    )
  }
}

Munchkin.propTypes = {
  turn: PropTypes.func.isRequired,
  giveOut: PropTypes.func.isRequired,
  putOn: PropTypes.func.isRequired,
  cut: PropTypes.func.isRequired,
  takeRace: PropTypes.func.isRequired,
  takeKlass: PropTypes.func.isRequired,
  deck: PropTypes.array.isRequired,
  player: PropTypes.object.isRequired
};

export default Munchkin;

/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react'
import Desk from '../components/desk'
import Enemy from '../components/enemy'
import Battle from '../components/battle'
import Player from '../components/player'
import HandCards from '../components/handCards'
import {Segment} from 'semantic-ui-react'
import _ from 'lodash';

class Munchkin extends Component {
  render () {
    const {
        turn, giveOut, putOn, cut, takeRace, takeKlass, deck, player
    } = this.props;

    const doors = _.shuffle(deck.filter(card => card.door === true));
    const treasures = _.shuffle(deck.filter(card => card.door === false));
    const desk = {player};
    return (
      <div>
        <Segment.Group horizontal>
          <Segment>
            <Enemy
              cards={deck}
              enemy={player}
            />
          </Segment>
          <Segment>
            <Enemy
              cards={deck}
              enemy={player}
            />
          </Segment>
          <Segment>
            <Enemy
              cards={deck}
              enemy={player}
            />
          </Segment>
        </Segment.Group>
        <Segment.Group horizontal>
          <Segment>
            <Enemy
              cards={deck}
              enemy={player}
            />
          </Segment>
          <Segment>
            <Desk
              desk={desk}
            />
          </Segment>
          <Segment>
            <Enemy
              cards={deck}
              enemy={player}
            />
          </Segment>
        </Segment.Group>
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

/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react'
import Desk from '../components/desk'
import Enemy from '../components/enemy'
import Battle from '../components/battle'
import Player from '../components/player'
import HandCards from '../components/handCards'
import _ from 'lodash'
import {GridList, GridTile} from 'material-ui/GridList'

class Munchkin extends Component {
  render () {
    const {
      turn, giveOut, putOn, cut, takeRace, takeKlass, deck, player
    } = this.props;

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%'
      },
      gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        width: '100%',
        marginBottom: 40
      },
      fullWidth: {
        width: '100%'
      }
    };

    const doors = _.shuffle(deck.filter(card => card.door === true));
    const treasures = _.shuffle(deck.filter(card => card.door === false));
    const desk = {player};
    return (
      <div className='app' style={styles.root}>
        <GridList style={styles.gridList}>
          <Enemy
            cards={deck}
            enemy={player}
          />
          <Enemy
            cards={deck}
            enemy={player}
          />
          <Enemy
            cards={deck}
            enemy={player}
          />
        </GridList>
        <GridList style={styles.gridList}>
          <Enemy
            cards={deck}
            enemy={player}
          />
          <Desk
            desk={desk}
          />
          <Enemy
            cards={deck}
            enemy={player}
          />
        </GridList>
        <Battle
          doors={doors}
          treasures={treasures}
          turn={player.turn}
          playerTotal={player.stats.lvl + player.stats.bonus}
          style={styles.fullWidth}
        />
        <Player
          player={player}
          turn={turn}
          style={styles.fullWidth}
        />
        <HandCards
          player={player}
          deck={deck}
          giveOut={giveOut}
          cut={cut}
          takeRace={takeRace}
          putOn={putOn}
          takeKlass={takeKlass}
          style={styles.fullWidth}
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

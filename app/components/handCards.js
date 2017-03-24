import React, {PropTypes, Component} from 'react'
import HandCard from './cards/handCard'
import _ from 'lodash'
import Paper from 'material-ui/Paper'
import ImmutablePropTypes from 'react-immutable-proptypes'

class HandCards extends Component {
  static propTypes = {
    player: ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        stats: ImmutablePropTypes.listOf(
          ImmutablePropTypes.contains({
            name: PropTypes.string.isRequired,
            gender: PropTypes.bool.isRequired,
            lvl: PropTypes.number.isRequired,
            bonus: PropTypes.number.isRequired,
            race: PropTypes.string.isRequired,
            klass: PropTypes.string.isRequired
          })
        ).isRequired,
        cards: ImmutablePropTypes.listOf(
          ImmutablePropTypes.contains({
            handCards: PropTypes.array.isRequired,
            inv: PropTypes.array.isRequired
          })
        ).isRequired,
        turn: PropTypes.bool.isRequired
      })
    ).isRequired,
    deck: ImmutablePropTypes.listOf(
      ImmutablePropTypes.contains({
        id: PropTypes.number.isRequired,
        door: PropTypes.bool.isRequired,
        img: PropTypes.string.isRequired,
        treasure: PropTypes.number.isRequired,
        curse: PropTypes.bool.isRequired,
        lvlUp: PropTypes.number.isRequired,
        undead: PropTypes.bool.isRequired,
        lvlMstr: PropTypes.number.isRequired,
        bonusDisaster: PropTypes.string.isRequired,
        race: PropTypes.object.isRequired,
        klass: PropTypes.object.isRequired,
        disaster: PropTypes.object.isRequired,
        bonus: PropTypes.number.isRequired,
        useOnly: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        golds: PropTypes.number.isRequired
      })
    ).isRequired,
    giveOut: PropTypes.func.isRequired,
    cut: PropTypes.func.isRequired,
    takeRace: PropTypes.func.isRequired,
    putOn: PropTypes.func.isRequired,
    takeKlass: PropTypes.func.isRequired
  };

  /**
   * Here we call function that shuffle and give out cards
   *
   * @param props
   */
  constructor(props) {
    super(props);
    let myShuffleCards = this.GiveOut(this.props.deck);
    this.props.giveOut(myShuffleCards);
  }

  /**
   * GiveOut - creating massive from 4 door and 4 treasure cards
   * Giving this cards to state player and cutting from state cards
   *
   * doors - array of door cards from deck
   * treasures - array of treasure cards from deck
   *
   * myDoors - array of 4 cards from doors
   * myTreasures - array of 4 cards from treasures
   * myCards - array of cards from myDoors + myTreasures
   *
   * @param item - original state from cards
   * @returns {Array} - 8 cards
   * @constructor
   */

  GiveOut = (item) => {
    let myCards = [];

    let doors = item.filter(card => card.door === true);
    let treasures = item.filter(card => card.door === false);

    doors = _.shuffle(doors);
    treasures = _.shuffle(treasures);

    let myDoors = doors.slice(1, 5);
    let myTreasures = treasures.slice(1, 5);

    myCards = myCards.concat(myDoors, myTreasures);
    myCards.map((sending) => this.props.cut(sending));
    return myCards
  };

  /**
   * Here we give out 8 cards and rendering table
   * @returns {XML}
   */

  render() {
    const {
      player,
      takeRace,
      putOn,
      takeKlass
    } = this.props;

    const styles = {
      width: '100%',
      textAlign: 'center',
      display: 'inline-block'
    };

    return (
      <Paper style={styles}>
        <p>Рука</p>
        {player.cards.handCards.map((card, key) =>
          <HandCard
            key={key}
            card={card}
            putOn={putOn}
            takeRace={takeRace}
            takeKlass={takeKlass}
            turn={player.turn}/>
        )}
      </Paper>
    )
  }
}

export default HandCards;

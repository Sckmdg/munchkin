import React, {Component, PropTypes} from 'react'
import {Card, CardMedia} from 'material-ui/Card'
import ImmutablePropTypes from 'react-immutable-proptypes'

class ItemCard extends Component {
  static propTypes = {
    card: ImmutablePropTypes.mapOf(
      ImmutablePropTypes.mapContains({
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
    ).isRequired
  };

  /**
   * ItemCard - it's treasures item's card's that can be added to players stats
   *
   * @returns {XML}
   */
  render () {
    const {card} = this.props;
    const styles = {
      width: 250,
      margin: 5,
      display: 'inline-block'
    };
    return (
      <Card style={styles}>
        <CardMedia>
          <img src={card.img} alt={card.name} />
        </CardMedia>
      </Card>
    );
  }
}

export default ItemCard;

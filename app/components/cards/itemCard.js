import React, {Component, PropTypes} from 'react'
import {Card, CardMedia} from 'material-ui/Card'

class ItemCard extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired
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

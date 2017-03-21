import React, {Component, PropTypes} from 'react'
import { Card, Image } from 'semantic-ui-react'

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
    const { card } = this.props;
    return (
        <Card>
          <Image src={card.img} alt={card.name} />
        </Card>
    );
  }
}

export default ItemCard;

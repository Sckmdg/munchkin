import React, {PropTypes, Component} from 'react'
import {Card, CardMedia} from 'material-ui/Card'

class HandCard extends Component {
  /**
   * Card - is single object from desk, with some properties and image
   *
   * @type {{card: *}}
   */

  static propTypes = {
    card: PropTypes.object.isRequired,
    takeRace: PropTypes.func.isRequired,
    putOn: PropTypes.func.isRequired,
    takeKlass: PropTypes.func.isRequired,
    turn: PropTypes.bool.isRequired
  };

  /**
   * Here we checking: is our card are bonus/door, then is this race/klass card
   * Then it plus bonus to bonus (if it's bonus), add klass to player's klass and etc
   *
   * @constructor
   */
  Pick = () => {
    const card = this.props.card;

    if (card.door) {
      if (card.race !== '') {
        this.props.takeRace(card);
      }

      if (card.klass !== '') {
        this.props.takeKlass(card)
      }
    }
    else {
      if (card.type !== '') {
        this.props.putOn(card);
      }
      else {
        console.log('will be in future');
      }
    }
  };

  render () {
    const {card} = this.props;
    const styles = {
      width: 250,
      margin: 5,
      display: 'inline-block'
    };

    return (
      <Card style={styles} onClick={this.props.turn === false ? this.Pick : null}>
        <CardMedia>
          <img src={card.img} alt={card.name}/>
        </CardMedia>
      </Card>
    );
  }
}

export default HandCard;

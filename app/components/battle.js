import React, {Component, PropTypes} from 'react'
import Paper from 'material-ui/Paper'
import {Card, CardMedia} from 'material-ui/Card'
import ImmutablePropTypes from 'react-immutable-proptypes'

class Battle extends Component {
  static propTypes = {
    doors: PropTypes.array.isRequired,
    playerTotal: PropTypes.number.isRequired,
    turn: PropTypes.bool.isRequired
  };

  /**
   * Here we checking what phase of turn now and giving door card to player
   *
   * @returns {XML}
   */
  render () {
    const styles = {
      height: 'auto',
      width: '100%',
      margin: 5,
      textAlign: 'center',
      display: 'inline-block'
    };
    const cardStyle = {
      width: 250,
      display: 'inline-block'
    };
    /**
     * Because of unknown reason i can't set styles.paper and styles.card
     * It ruins styles
     */
    let doorCard = this.props.doors[0];
    if (this.props.turn) {
      return (
        <Paper style={styles}>
          <p>Уровень монстра: {doorCard.lvlMstr}</p>
          <p>Мощь игрока(ов): {this.props.playerTotal}</p>
          <Card style={cardStyle}>
            <CardMedia>
              <img src={doorCard.img} alt={doorCard.name} />
            </CardMedia>
          </Card>
        </Paper>
      )
    }
    else {
      return (
        <Paper style={styles}>
          <p>Вы еще не постучались в дверь</p>
        </Paper>
      )
    }
  }
}

export default Battle;

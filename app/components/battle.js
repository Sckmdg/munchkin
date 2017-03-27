import React, {Component, PropTypes} from 'react'
import Paper from 'material-ui/Paper'
import {Card, CardMedia} from 'material-ui/Card'
import ImmutablePropTypes from 'react-immutable-proptypes'

class Battle extends Component {
  // static propTypes = {
  //   doors: ImmutablePropTypes.listOf(
  //     ImmutablePropTypes.contains({
  //       id: PropTypes.number.isRequired,
  //       door: PropTypes.bool.isRequired,
  //       img: PropTypes.string.isRequired,
  //       treasure: PropTypes.number.isRequired,
  //       curse: PropTypes.bool.isRequired,
  //       lvlUp: PropTypes.number.isRequired,
  //       undead: PropTypes.bool.isRequired,
  //       lvlMstr: PropTypes.number.isRequired,
  //       bonusDisaster: PropTypes.string.isRequired,
  //       race: PropTypes.object.isRequired,
  //       klass: PropTypes.object.isRequired,
  //       disaster: PropTypes.object.isRequired
  //     })
  //   ).isRequired,
  //   player: ImmutablePropTypes.mapOf(
  //     ImmutablePropTypes.mapContains({
  //       stats: ImmutablePropTypes.mapOf(
  //         ImmutablePropTypes.mapContains({
  //           name: PropTypes.string.isRequired,
  //           gender: PropTypes.bool.isRequired,
  //           lvl: PropTypes.number.isRequired,
  //           bonus: PropTypes.number.isRequired,
  //           race: PropTypes.string.isRequired,
  //           klass: PropTypes.string.isRequired,
  //           turn: PropTypes.bool.isRequired
  //         })),
  //       cards: ImmutablePropTypes.mapOf(
  //         ImmutablePropTypes.mapContains({
  //           handCards: PropTypes.array.isRequired,
  //           inv: PropTypes.array.isRequired
  //         })
  //       ).isRequired
  //     })
  //   ).isRequired
  // };

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
    const doors = this.props.doors;
    const doorCard = doors[0];
    const playerInfo = this.props.player.toJS();
    const total = playerInfo.stats.lvl + playerInfo.stats.bonus;
    const turn = playerInfo.turn;

    if (turn) {
      return (
        <Paper style={styles}>
          <p>Уровень монстра: {doorCard.lvlMstr}</p>
          <p>Мощь игрока(ов): {total}</p>
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

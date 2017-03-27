import React, {Component, PropTypes} from 'react'
import Paper from 'material-ui/Paper'
import ItemCard from './cards/itemCard'
import {Card, CardMedia, CardTitle} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import ImmutablePropTypes from 'react-immutable-proptypes'

class Player extends Component {
  // static propTypes = {
  //   player: ImmutablePropTypes.mapOf(
  //     ImmutablePropTypes.mapContains({
  //       stats: ImmutablePropTypes.mapOf(
  //         ImmutablePropTypes.mapContains({
  //           name: PropTypes.string.isRequired,
  //           gender: PropTypes.bool.isRequired,
  //           lvl: PropTypes.number.isRequired,
  //           bonus: PropTypes.number.isRequired,
  //           race: PropTypes.string.isRequired,
  //           klass: PropTypes.string.isRequired
  //         })),
  //       cards: ImmutablePropTypes.mapOf(
  //         ImmutablePropTypes.mapContains({
  //           handCards: PropTypes.array.isRequired,
  //           inv: PropTypes.array.isRequired
  //         })
  //       ).isRequired,
  //       turn: PropTypes.bool.isRequired
  //     })
  //   ).isRequired,
  //   turn: PropTypes.func.isRequired
  // };

  /**
   * Here we will render info about player and his item's card's
   *
   * @returns {XML}
   */
  render () {
    const playerInfo = this.props.player.toJS();
    const total = playerInfo.stats.lvl + playerInfo.stats.bonus;
    const styles = {
      paper: {
        width: '100%',
        textAlign: 'center',
        display: 'inline-block'
      },
      card: {
        width: 250,
        margin: 20,
        display: 'inline-block'
      },
      button: {
        margin: 12
      }
    };
    return (
      <Paper style={styles.paper}>
        <p>Статы</p>
        <p>Уровень игрока {playerInfo.stats.lvl}</p>
        <p>Все бонусы, включая уровень {total}</p>
        <br />
        <Card style={styles.card}>
          <CardMedia
            overlay={<CardTitle title='Раса:' subtitle={playerInfo.stats.race.name} />}
          >
            <img src={playerInfo.stats.race.img}/>
          </CardMedia>
        </Card>
        <Card style={styles.card}>
          <CardMedia
            overlay={<CardTitle title='Класс:' subtitle={playerInfo.stats.klass.name} />}
          >
            <img src={playerInfo.stats.klass.img}/>
          </CardMedia>
        </Card>
        <Paper style={styles.paper}>
          <RaisedButton label='Начать ход' primary={true} style={styles.button} onClick={this.props.turn} />
          <RaisedButton label='Закончить ход' secondary={true} style={styles.button} />
        </Paper>
        <Paper style={styles.paper}>
          <p>Инвентарь</p>
          {playerInfo.cards.inv.map((card, key) =>
            <ItemCard
              key={key}
              card={card}
            />
          )}
        </Paper>
      </Paper>
    )
  }
}

export default Player

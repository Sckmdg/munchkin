import React, {Component, PropTypes} from 'react'
import Paper from 'material-ui/Paper'
import ItemCard from './cards/itemCard'
import RaisedButton from 'material-ui/RaisedButton'

import ImmutablePropTypes from 'react-immutable-proptypes'
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover'

class Enemy extends Component {
  // static propTypes = {
  //   enemy: ImmutablePropTypes.mapOf(
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
  //   ).isRequired
  // };

  constructor (props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleTouchTap = (event) => {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    })
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  };

  /**
   * Enemy's inventory and stats
   *
   * @returns {XML}
   */
  render () {
    let enemyInfo = this.props.enemy.toJS();
    let total = enemyInfo.stats.lvl + enemyInfo.stats.bonus;
    const styles = {
      rootPaper: {
        height: 200,
        width: 400,
        margin: 10,
        textAlign: 'center',
        display: 'inline-block'
      },
      popUp: {
        width: 400,
        display: 'inline-block'
      },
      inPaper: {
        width: '100%',
        display: 'inline-block'
      }
    };
    return (
      <Paper style={styles.rootPaper}>
        <p>Уровень игрока: {enemyInfo.stats.lvl}</p>
        <p>Все бонусы, включая уровень: {total}</p>
        <p>Раса: {enemyInfo.stats.race.name}</p>
        <p>Класс: {enemyInfo.stats.klass.name}</p>
        <RaisedButton label='Инвентарь' fullWidth={true} onTouchTap={this.handleTouchTap} />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
          animation={PopoverAnimationVertical}
          style={styles.popUp}
        >
          <Paper style={styles.inPaper}>
            {enemyInfo.cards.inv.map((card, key) =>
              <ItemCard
                key={key}
                card={card}
              />
            )}
          </Paper>
        </Popover>
      </Paper>
    )
  }
}

export default Enemy;

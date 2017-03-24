import React, {Component, PropTypes} from 'react'
import Paper from 'material-ui/Paper'
import ImmutablePropTypes from 'react-immutable-proptypes'

class Desk extends Component {
  static propTypes = {
    desk: ImmutablePropTypes.listOf(
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
    ).isRequired
  };
  /**
   * Here we compare player's lvl with cell lvl. It will show visually all player's lvl
   *
   * @param lvl - cell with lvl number
   * @param info - players current lvl
   * @returns {*}
   * @constructor
   */
  CheckLvl = (lvl, info) => {
    let currentLvl;
    if (info === lvl) {
      currentLvl = this.props.desk.player.stats.name
    }
    return currentLvl;
  };

  render () {
    let statLvl = this.props.desk.player.stats.lvl;
    const styles = {
      height: 200,
      width: 200,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block'
    };
    return (
      <Paper style={styles}>
        <div>1 <br />{this.CheckLvl(1, statLvl)}</div>
        <div>2 <br />{this.CheckLvl(2, statLvl)}</div>
        <div>3 <br />{this.CheckLvl(3, statLvl)}</div>
        <div>4 <br />{this.CheckLvl(4, statLvl)}</div>
        <div>5 <br />{this.CheckLvl(5, statLvl)}</div>
        <div>6 <br />{this.CheckLvl(6, statLvl)}</div>
        <div>7 <br />{this.CheckLvl(7, statLvl)}</div>
        <div>8 <br />{this.CheckLvl(8, statLvl)}</div>
        <div>9 <br />{this.CheckLvl(9, statLvl)}</div>
        <div>10 <br />{this.CheckLvl(10, statLvl)}</div>
      </Paper>
    )
  }
}

export default Desk;

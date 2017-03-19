import React, {Component, PropTypes} from 'react';
class Desk extends Component {
  static propTypes = {
    desk: PropTypes.object.isRequired
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
    return (
      <div className='desk col-md-12'>
        <div className='col-md-1 text-center' >
          1 <br />
          {this.CheckLvl(1, statLvl)}
        </div>
        <div className='col-md-1 text-center'>
          2 <br />
          {this.CheckLvl(2, statLvl)}
        </div>
        <div className='col-md-1 text-center'>
          3 <br />
          {this.CheckLvl(3, statLvl)}
        </div>
        <div className='col-md-1 text-center'>
          4 <br />
          {this.CheckLvl(4, statLvl)}
        </div>
        <div className='col-md-1 text-center'>
          5 <br />
          {this.CheckLvl(5, statLvl)}
        </div>
        <div className='col-md-1 text-center'>
          6 <br />
          {this.CheckLvl(6, statLvl)}
        </div>
        <div className='col-md-1 text-center'>
          7 <br />
          {this.CheckLvl(7, statLvl)}
        </div>
        <div className='col-md-1 text-center'>
          8 <br />
          {this.CheckLvl(8, statLvl)}
        </div>
        <div className='col-md-1 text-center'>
          9 <br />
          {this.CheckLvl(9, statLvl)}
        </div>
        <div className='col-md-1 text-center'>
          10 <br />
          {this.CheckLvl(10, statLvl)}
        </div>
      </div>
    )
  }
}

export default Desk;

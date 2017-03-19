import React, { Component, PropTypes } from 'react';
import helm from '../img/helm.png';
import sword from '../img/sword.png';
import armour from '../img/armour.png';
import boots from '../img/boots.png';
class Player extends Component {
    /**
     * Here we will render info about player
     * This info will be changing when some actions will be called
     * @returns {XML}
     */
  render () {
    let total = this.props.player.Player.lvl + this.props.player.Player.bonus;
    return (
      <div className='player'>
        <p className='text-center'>Уровень игрока {total}</p>
        <p className='text-center'>Все бонусы, включая уровень {total}</p>
        <div className='col-md-12'>
          <div className='col-md-3 text-center inventory'>
            <img src={helm} />
          </div>
          <div className='col-md-3 text-center inventory'>
            <img src={sword} />
            <img src={sword} />
          </div>
          <div className='col-md-3 text-center inventory'>
            <img src={armour} />
          </div>
          <div className='col-md-3 text-center inventory'>
            <img src={boots} />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='col-md-6 spec text-center'>
            <br />
            <p>Раса</p>
            <p>{this.props.player.Player.race}</p>
          </div>
          <div className='col-md-6 spec text-center'>
            <br />
            <p>Класс</p>
            <p>{this.props.player.Player.klass}</p>
          </div>
        </div>
      </div>
    )
  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired
}

export default Player;

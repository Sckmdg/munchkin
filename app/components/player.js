import React, {Component, PropTypes} from 'react';
import ItemCard from './cards/itemCard';
class Player extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    turn: PropTypes.func.isRequired
  };
  /**
   * Here we will render info about player and his item's card's
   *
   * @returns {XML}
   */
  render () {
    let playerInfo = this.props.player.Player;
    let total = playerInfo.stats.lvl + playerInfo.stats.bonus;
    return (
      <div className='player'>
        <p className='text-center'>Уровень игрока {playerInfo.stats.lvl}</p>
        <p className='text-center'>Все бонусы, включая уровень {total}</p>
        <button className='btn-success btn-lg' onClick={this.props.turn}>Начать Ход</button>
        <button className='btn-danger btn-lg col-md-offset-1'>Закончить Ход</button>
        <div className='col-md-12'>
          <div className='col-md-6'>
            <div className='col-md-3 singleCard'>
              <br />
              <p className='text-center'>Раса: {playerInfo.stats.race.name}</p>
              <img src={playerInfo.stats.race.img} />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='col-md-3 singleCard'>
              <br />
              <p className='text-center'>Класс: {playerInfo.stats.klass.name}</p>
              <img src={playerInfo.stats.klass.img} />
            </div>
          </div>
        </div>
        <div>
          {playerInfo.cards.inv.map((card, key) =>
            <ItemCard
              key={key}
              card={card}
            />
          )}
        </div>

      </div>
    )
  }
}

export default Player

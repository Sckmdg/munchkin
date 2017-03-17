import React, {Component} from 'react';
import ItemCard from './cards/itemCard';
class Player extends Component {
    /**
     * Here we will render info about player
     * This info will be changing when some actions will be called
     * @returns {XML}
     */
    render() {
        let shortName = this.props.player.Player;
        let total = shortName.stats.lvl + shortName.stats.bonus;
        return (
            <div className='player'>
                <p className='text-center'>Уровень игрока {shortName.stats.lvl}</p>
                <p className='text-center'>Все бонусы, включая уровень {total}</p>
                <div className='col-md-12'>
                    <div className='col-md-6'>
                        <div className='col-md-3 singleCard'>
                            <p className='text-center'>Раса: {shortName.stats.race.name}</p>
                            <img src={this.props.player.Player.stats.race.img}/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='col-md-3 singleCard'>
                            <p className='text-center'>Класс: {shortName.stats.klass.name}</p>
                            <img src={this.props.player.Player.stats.klass.img}/>
                        </div>
                    </div>
                </div>
                <div>
                    {shortName.cards.inv.map((card, key) =>
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
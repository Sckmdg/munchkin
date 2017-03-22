import React, {Component, PropTypes} from 'react'
import ItemCard from './cards/itemCard'

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
    render() {
        let playerInfo = this.props.player;
        let total = playerInfo.stats.lvl + playerInfo.stats.bonus;
        return (
            <div>
                <div>Статы</div>
                    <div>
                        <div>Уровень игрока {playerInfo.stats.lvl}</div>
                        <div>Все бонусы, включая уровень {total}</div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={playerInfo.stats.race.img}/>
                                <div>
                                    <div>Раса: {playerInfo.stats.race.name}</div>
                                </div>
                            </div>
                            <div>
                                <img src={playerInfo.stats.klass.img}/>
                                <div>
                                    <div>Класс: {playerInfo.stats.klass.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button type='button' onClick={this.props.turn}>Начать Ход</button>
                            <button type='button'>Закончить Ход</button>
                        </div>
                    </div>
                    <div>Инвентарь <br/>
                        <div>
                            {playerInfo.cards.inv.map((card, key) =>
                                <ItemCard
                                    key={key}
                                    card={card}
                                />
                            )}
                        </div>
                    </div>
            </div>
        )
    }
}

export default Player

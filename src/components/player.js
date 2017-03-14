import React, {Component} from 'react';
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
    render() {
        let total = this.props.player.Player.stats.lvl + this.props.player.Player.stats.bonus;
        return (
            <div className='player'>
                <p className='text-center'>Уровень игрока {this.props.player.Player.stats.lvl}</p>
                <p className='text-center'>Все бонусы, включая уровень {total}</p>
                <div className='col-md-12'>
                    <div className='col-md-3 text-center inventory'>
                        <img src={helm}/>
                    </div>
                    <div className='col-md-3 text-center inventory'>
                        <img src={sword}/>
                        <img src={sword}/>
                    </div>
                    <div className='col-md-3 text-center inventory'>
                        <img src={armour}/>
                    </div>
                    <div className='col-md-3 text-center inventory'>
                        <img src={boots}/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='col-md-6 spec text-center'>
                        <br/>
                        <p>Раса</p>
                        <p>{this.props.player.Player.stats.race}</p>
                    </div>
                    <div className='col-md-6 spec text-center'>
                        <br/>
                        <p>Класс</p>
                        <p>{this.props.player.Player.stats.klass}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player
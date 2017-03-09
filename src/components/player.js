import React, {Component} from 'react';
class Player extends Component {
    /**
     * Here we will render info about player
     * This info will be changing when some actions will be called
     * @returns {XML}
     */
    render() {
        return (
            <div className='player'>
                <p className='text-center'>Уровень игрока {this.props.player.Player.lvl}</p>
                <p className='text-center'>Все бонусы, включая уровень {this.props.player.Player.lvl}</p>
                <div className='col-md-12'>
                    <div className='col-md-3 text-center inventory'>
                        <img src='/static/src/img/helm.png'/>
                    </div>
                    <div className='col-md-3 text-center inventory'>
                        <img src='/static/src/img/sword.png'/>
                        <img src='/static/src/img/sword.png'/>
                    </div>
                    <div className='col-md-3 text-center inventory'>
                        <img src='/static/src/img/armour.png'/>
                    </div>
                    <div className='col-md-3 text-center inventory'>
                        <img src='/static/src/img/boots.png'/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='col-md-6 spec text-center'>
                        <br/>
                        <p>Раса</p>
                        <p>{this.props.player.Player.race}</p>
                    </div>
                    <div className='col-md-6 spec text-center'>
                        <br/>
                        <p>Класс</p>
                        <p>{this.props.player.Player.klass}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Player
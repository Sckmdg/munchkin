import React, {Component} from 'react';
class Battle extends Component {
    /**
     * Here we checking what phase of turn now and giving door card to player
     *
     * @returns {XML}
     */
    render() {
        let doorCard = this.props.doors[0];
        if (this.props.turn) {
            return (
                <div className='col-md-12 singleCard battleGround'>
                    <p className='text-center'>Уровень монстра: {doorCard.lvlMstr}</p>
                    <p className='text-center'>Мощь игроков: {this.props.playerTotal}</p>
                    <img src={doorCard.img} alt={doorCard.name}/>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }

    }
}

export default Battle
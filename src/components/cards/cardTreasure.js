import React, {PropTypes, Component} from 'react';
class CardTreasure extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired
    };

    render () {
        const {card} = this.props;

        let bonus = (card.bonus == 0) ? '' : '+' + card.bonus + ' Бонус';
        let gold = (card.golds == 0) ? '' : card.golds + ' голдов';
        let useOnly = (card.useOnly == null || card.useOnly == '') ? '' : 'Применяется Только Классом ' + card.useOnly;
        return (
            <div className='col-md-3 singleCard'>
                <h4 className='text-center'>{bonus}</h4>
                <p className='text-center'>{useOnly}</p>
                <h4 className='text-center'>{card.name}</h4>
                <img src={card.img} alt={card.name}/>
                <p>{card.description}</p>
                <div className='text-left' id='left'>{card.type}</div>
                <div className='text-right' id='right'>{gold}</div>
            </div>
        )
    }
}

export default CardTreasure
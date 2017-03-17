import React, {Component} from 'react';
class ItemCard extends Component {
    /**
     * ItemCard - it's treasures item's card's that can be added to players stats
     *
     * @returns {XML}
     */
    render (){
        const {card} = this.props;
        return (
            <div className='col-md-3 singleCard'>
                <img src={card.img} alt={card.name}/>
            </div>
        );
    }
}

export default ItemCard
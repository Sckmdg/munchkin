import React, {Component} from 'react';
class ItemCard extends Component {

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
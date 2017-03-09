import React, {Component} from 'react';
import img from '../img/img.jpg';
class Table extends Component {
    /**
     * Here we display our cards, how the will be look in future
     * @returns {XML}
     */
    render() {
        const cards = this.props.cards.startGame;
        const singleCard = cards.map(function(item) {
            const lvlSign = 'Уровень ';
            const lvlUpSign = ' Уровня ';
            const treasureSign = ' Сокровища ';
            let curse = (item.curse == true) ? 'Проклятие!' : '';
            let lvl = (item.lvlMstr == 0) ? '' : lvlSign + item.lvlMstr;
            let lvlUp = (item.lvlUp == 0) ? '' : item.lvlUp + lvlUpSign;
            let treasure = (item.treasure == 0) ? '' : item.treasure + treasureSign;
            return (
                    <div className='col-md-3 singleCard' key={item.id}>
                        <h4 className='text-center'>{curse}</h4>
                        <h4 className='text-center'>{lvl}</h4>
                        <h4 className='text-center'>{item.name}</h4>
                        <img src='/static/src/img/img.jpg' alt={item.name}/>
                        <p>{item.description}</p>
                        <div className='text-left' id='left'>{lvlUp}</div>
                        <div className='text-right' id='right'>{treasure}</div>
                    </div>
            );
        });
        return (
                <div className='blabla'>{singleCard}</div>
        )
    }
}

export default Table
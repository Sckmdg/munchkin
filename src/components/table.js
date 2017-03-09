import React, {Component} from 'react';
import img from '../img/img.jpg';
class Table extends Component {

    HandDoors = (item) => {
        let myDoors = [];
        for (let i =0; i < 4; i++){
            let index = Math.floor(Math.random()*item.length);
            let currentCard = item[index];
            item.splice(index, 1);
            myDoors = myDoors.concat(currentCard);
        }
        return myDoors
    };

    HandTreasure = (item) => {
        let myTreasure = [];
        for (let i =0; i < 4; i++){
            let index = Math.floor(Math.random()*item.length);
            let currentCard = item[index];
            item.splice(index, 1);
            myTreasure = myTreasure.concat(currentCard);
        }
        return myTreasure
    };

    render() {
        const doorCards = this.props.cards.startGame.doors;
        let myDoors = this.HandDoors(doorCards);

        const doors = myDoors.map(function(item) {
            let curse = (item.curse == true) ? 'Проклятие!' : '';
            let lvl = (item.lvlMstr == 0) ? '' : 'Уровень ' + item.lvlMstr;
            let lvlUp = (item.lvlUp == 0) ? '' : item.lvlUp + ' Уровня';
            let treasure = (item.treasure == 0) ? '' : item.treasure + ' Сокровища ';
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

        const treasureCards = this.props.cards.startGame.treasures;
        let myTreasure = this.HandTreasure(treasureCards);
        const treasures = myTreasure.map(function(item) {
            let bonus = (item.bonus == 0) ? '' : '+' + item.bonus + ' Бонус';
            let gold = (item.golds == 0) ? '' : item.golds + ' голдов';
          return(
              <div className='col-md-3 singleCard' key={item.id}>
                  <h4 className='text-center'>{bonus}</h4>
                  <p className='text-center'>{item.useOnly}</p>
                  <h4 className='text-center'>{item.name}</h4>
                  <img src='/static/src/img/img.jpg' alt={item.name}/>
                  <p>{item.description}</p>
                  <div className='text-left' id='left'>{item.type}</div>
                  <div className='text-right' id='right'>{gold}</div>
              </div>
          );
        });

        return (
                <div className='blabla'>{doors}{treasures}</div>
        )
    }
}

export default Table
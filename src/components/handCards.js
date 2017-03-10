import React from 'react';

class HandCards extends React.Component {
    /**
     * Here we composing our cards in deck and send to state
     * @param props
     */
    constructor(props) {
        super(props);
        const doorCards = this.props.cards.HandCards.doors;
        let myDoors = this.HandDoors(doorCards);
        const treasureCards = this.props.cards.HandCards.treasures;
        let myTreasure = this.HandTreasure(treasureCards);
        let myDeck = myDoors.concat(myTreasure);
        this.props.giveOut(myDeck);
    }

    /**
     * Here we taking array from door cards and take 4 random nonrepeatable cards
     * @param item - it's array from door cards
     * @returns {Array} - returns 4 card array, also takes away cards from original array
     * @constructor
     */

    HandDoors = (item) => {
        let myDoors = [];
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * item.length);
            let currentCard = item[index];
            item.splice(index, 1);
            myDoors = myDoors.concat(currentCard);
        }
        return myDoors
    };

    /**
     * Here we taking array from treasure cards and take 4 random nonrepeatable cards
     * @param item - it's array from treasure cards
     * @returns {Array} - returns 4 card array, also takes away cards from original array
     * @constructor
     */
    HandTreasure = (item) => {
        let myTreasure = [];
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * item.length);
            let currentCard = item[index];
            item.splice(index, 1);
            myTreasure = myTreasure.concat(currentCard);
        }
        return myTreasure
    };

    /**
     * Here we give out 8 cards and rendering table
     * @returns {XML}
     */

    Pick =(item) =>{
        console.log(item);
        //this.props.pickCard(item);
    };

    render() {
        const {cards} = this.props;
        const doors = cards.Player.playerCards.map((card, key) => {
            if (card.door == true) {
                let curse = (card.curse == true) ? 'Проклятие!' : '';
                let lvl = (card.lvlMstr == 0) ? '' : 'Уровень ' + card.lvlMstr;
                let lvlUp = (card.lvlUp == 0) ? '' : card.lvlUp + ' Уровня';
                let treasure = (card.treasure == 0) ? '' : card.treasure + ' Сокровища ';
                return (
                    <div className='col-md-3 singleCard' key={key}>
                        <h4 className='text-center'>{curse}</h4>
                        <h4 className='text-center'>{lvl}</h4>
                        <h4 className='text-center'>{card.name}</h4>
                        <img src={card.img} alt={card.name}/>
                        <p>{card.description}</p>
                        <div className='text-left' id='left'>{lvlUp}</div>
                        <div className='text-right' id='right'>{treasure}</div>
                        <button onClick={this.Pick(card)}>Pick me</button>
                    </div>
                );
            }
            else {
                let bonus = (card.bonus == 0) ? '' : '+' + card.bonus + ' Бонус';
                let gold = (card.golds == 0) ? '' : card.golds + ' голдов';
                let useOnly = (card.useOnly == null || card.useOnly == '') ? '' : 'Применяется Только Классом ' + card.useOnly;
                return (
                    <div className='col-md-3 singleCard' key={key}>
                        <h4 className='text-center'>{bonus}</h4>
                        <p className='text-center'>{useOnly}</p>
                        <h4 className='text-center'>{card.name}</h4>
                        <img src={card.img} alt={card.name}/>
                        <p>{card.description}</p>
                        <div className='text-left' id='left'>{card.type}</div>
                        <div className='text-right' id='right'>{gold}</div>
                        <button onClick={this.Pick(card)}>Pick me</button>
                    </div>
                );
            }
        });

        return (
            <div className='col-md-12'>{doors}</div>
            // <div>
            //     {cards.Player.playerCards.map((card, key) =>
            //         <div key ={key}>{card.name}</div>
            //     )}
            // </div>
        )
    }
}

export default HandCards
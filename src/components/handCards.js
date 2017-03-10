import React from 'react';
import CardDoor from './cards/cardDoor';
import CardTreasure from './cards/cardTreasure';

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
        this.props.giveOut(myDoors, myTreasure);
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

    render() {
        const {cards} = this.props;

        return (
            <div className='col-md-12'>
                {
                    cards.Player.playerDoorCards.map((card, key,) =>
                        <CardDoor key={key} card={card} pickCard={this.props.pickCard}/>
                    )
                }

                {
                    cards.Player.playerTreasureCards.map((card, key,) =>
                        <CardTreasure key={key} card={card}/>
                    )
                }
            </div>
        )
    }
}

export default HandCards
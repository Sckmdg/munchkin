import React from 'react';
import Card from './cards/card';

class HandCards extends React.Component {
    /**
     * Here we composing our cards in deck and send to state
     * @param props
     */
    constructor(props) {
        super(props);
        const Cards = this.props.cards.HandCards;
        let myShuffleCards = this.Shuffle(Cards);
        this.props.giveOut(myShuffleCards);
    }

    /**
     * Here we taking array from door cards and take 4 random nonrepeatable cards
     * @param item - it's array from door cards
     * @returns {Array} - returns 4 card array, also takes away cards from original array
     * @constructor
     */

    Shuffle = (item) => {
        let myCards = [];

        let myDoors = [];
        let doors = item.filter((card) =>{
            return card.door == true;
        });
        let sizeDoors = doors.length;
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * sizeDoors);
            let currentDoor = doors[index];
            item.splice(index, 1);
            myDoors = myDoors.concat(currentDoor);
        }

        let myTreasures = [];
        let treasures = item.filter((card) =>{
           return card.door == false;
        });
        let sizeTreasures = treasures.length;
        for (let i = 0; i < 4; i++) {
            let index = Math.floor(Math.random() * sizeTreasures);
            let currentTreasure = treasures[index];
            item.splice(index, 1);
            myTreasures = myTreasures.concat(currentTreasure);
        }

        myCards = myCards.concat(myDoors, myTreasures);
        return myCards;
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
                    cards.Player.playerHandCards.map((card, key) =>
                        <Card key={key} card={card}/>
                    )
                }
            </div>
        )
    }
}

export default HandCards
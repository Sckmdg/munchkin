import React from 'react';
import Card from './cards/card';
import _ from 'lodash';

class HandCards extends React.Component {
    /**
     * Here we call function that shuffle and give out cards
     * @param props
     */
    constructor(props) {
        super(props);
        const Cards = this.props.cards.Deck;
        let myShuffleCards = this.GiveOut(Cards);
        this.props.giveOut(myShuffleCards);
    }

    /**
     * GiveOut - creating massive from 4 door and 4 treasure cards
     * Giving this cards to state player and cutting from state cards
     *
     * doors - array of door cards from deck
     * treasures - array of treasure cards from deck
     *
     * myDoors - array of 4 cards from doors
     * myTreasures - array of 4 cards from treasures
     * myCards - array of cards from myDoors + myTreasures
     *
     * @param item - original state from cards
     * @returns {Array} - 8 cards
     * @constructor
     */

    GiveOut = (item) => {
        let myCards = [];

        let doors = item.filter((card) =>{
            return card.door == true;
        });
        let treasures = item.filter((card) =>{
            return card.door == false;
        });

        doors = _.shuffle(doors);
        treasures = _.shuffle(treasures);

        let myDoors = doors.slice(1, 5);
        let myTreasures = treasures.slice(1, 5);

        myCards = myCards.concat(myDoors, myTreasures);
        myCards.map((sending) =>{
            this.props.cut(sending);
        });
        return myCards
    };

    /**
     * Here we give out 8 cards and rendering table
     * @returns {XML}
     */

    render() {
        const {cards} = this.props;
        return (
            <div className='col-md-12 handCards'>
                {
                    cards.Player.cards.handCards.map((card, key) =>
                        <Card key={key}
                              card={card}
                              putOn={this.props.putOn}
                              takeRace={this.props.takeRace}
                              takeKlass={this.props.takeKlass}
                        />
                    )
                }
            </div>
        )
    }
}

export default HandCards
import React, {PropTypes, Component} from 'react'
import HandCard from './cards/handCard'
import _ from 'lodash'
import {Card, Image, Segment} from 'semantic-ui-react'

class HandCards extends Component {
    static propTypes = {
        player: PropTypes.object.isRequired,
        deck: PropTypes.array.isRequired,
        giveOut: PropTypes.func.isRequired,
        cut: PropTypes.func.isRequired,
        takeRace: PropTypes.func.isRequired,
        putOn: PropTypes.func.isRequired,
        takeKlass: PropTypes.func.isRequired
    };

    /**
     * Here we call function that shuffle and give out cards
     *
     * @param props
     */
    constructor(props) {
        super(props);
        let myShuffleCards = this.GiveOut(this.props.deck);
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

        let doors = item.filter(card => card.door === true);
        let treasures = item.filter(card => card.door === false);

        doors = _.shuffle(doors);
        treasures = _.shuffle(treasures);

        let myDoors = doors.slice(1, 5);
        let myTreasures = treasures.slice(1, 5);

        myCards = myCards.concat(myDoors, myTreasures);
        myCards.map((sending) => this.props.cut(sending));
        return myCards
    };

    /**
     * Here we give out 8 cards and rendering table
     * @returns {XML}
     */

    render() {
        const {
            player,
            takeRace,
            putOn,
            takeKlass
        } = this.props;
        return (
            <Segment textAlign='center'>Рука <br/>
                <Card.Group itemsPerRow={4}>
                    {player.cards.handCards.map((card, key) =>
                        <HandCard
                            key={key}
                            card={card}
                            putOn={putOn}
                            takeRace={takeRace}
                            takeKlass={takeKlass}
                            turn={player.turn}/>
                    )}
                </Card.Group>
            </Segment>
        )
    }
}

export default HandCards;

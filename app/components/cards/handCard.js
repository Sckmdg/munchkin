import React, {PropTypes, Component} from 'react'
import { Card, Image } from 'semantic-ui-react'

class HandCard extends Component {
    /**
     * Card - is single object from desk, with some properties and image
     *
     * @type {{card: *}}
     */

    static propTypes = {
        card: PropTypes.object.isRequired,
        takeRace: PropTypes.func.isRequired,
        putOn: PropTypes.func.isRequired,
        takeKlass: PropTypes.func.isRequired,
        turn: PropTypes.bool.isRequired
    };

    /**
     * Here we checking: is our card are bonus/door, then is this race/klass card
     * Then it plus bonus to bonus (if it's bonus), add klass to player's klass and etc
     *
     * @constructor
     */
    Pick = () => {
        const card = this.props.card;

        if (card.door) {
            if (card.race !== '') {
                this.props.takeRace(card);
            }

            if (card.klass !== '') {
                this.props.takeKlass(card)
            }
        }
        else {
            if (card.type !== '') {
                this.props.putOn(card);
            }
            else {
                console.log('will be in future');
            }
        }
    };

    render () {
        const {card} = this.props;
        return (
            <Card onClick={this.props.turn === false ? this.Pick : null}>
              <Image src={card.img} alt={card.name} />
            </Card>
        );
    }
}

export default HandCard;

import React, {Component, PropTypes} from 'react'
import {Segment, Card, Image} from 'semantic-ui-react'

class Battle extends Component {
    static propTypes = {
        doors: PropTypes.array.isRequired,
        playerTotal: PropTypes.number.isRequired,
        turn: PropTypes.bool.isRequired
    };

    /**
     * Here we checking what phase of turn now and giving door card to player
     *
     * @returns {XML}
     */
    render() {
        let doorCard = this.props.doors[0];
        if (this.props.turn) {
            return (
                <Segment.Group>
                    <Segment.Group horizontal>
                        <Segment textAlign='center'>Уровень монстра: {doorCard.lvlMstr}</Segment>
                        <Segment textAlign='center'>Мощь игрока(ов): {this.props.playerTotal}</Segment>
                    </Segment.Group>
                    <Segment>
                        <Card>
                            <Image src={doorCard.img} alt={doorCard.name} />
                        </Card>
                    </Segment>
                </Segment.Group>
            )
        }
        else {
            return (
                <div>1</div>
            )
        }
    }
}

export default Battle;

import React, {Component, PropTypes} from 'react'
import ItemCard from './cards/itemCard'
import {Segment} from 'semantic-ui-react'
import {Card, Image} from 'semantic-ui-react'
import {Button} from 'semantic-ui-react'

class Player extends Component {
    static propTypes = {
        player: PropTypes.object.isRequired,
        turn: PropTypes.func.isRequired
    };

    /**
     * Here we will render info about player and his item's card's
     *
     * @returns {XML}
     */
    render() {
        let playerInfo = this.props.player;
        let total = playerInfo.stats.lvl + playerInfo.stats.bonus;
        return (
            <Segment.Group>
                <Segment textAlign='center'>Статы</Segment>
                <Segment.Group>
                    <Segment.Group horizontal>
                        <Segment textAlign='center'>Уровень игрока {playerInfo.stats.lvl}</Segment>
                        <Segment textAlign='center'>Все бонусы, включая уровень {total}</Segment>
                    </Segment.Group>
                    <Segment>
                        <Card.Group itemsPerRow={3}>
                            <Card>
                                <Image src={playerInfo.stats.race.img}/>
                                <Card.Content>
                                    <Card.Header>Раса: {playerInfo.stats.race.name}</Card.Header>
                                </Card.Content>
                            </Card>
                            <Card>
                                <Image src={playerInfo.stats.klass.img}/>
                                <Card.Content>
                                    <Card.Header>Класс: {playerInfo.stats.klass.name}</Card.Header>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </Segment>
                    <Segment textAlign='center'>
                        <Button.Group>
                            <Button positive onClick={this.props.turn}>Начать Ход</Button>
                            <Button.Or />
                            <Button negative>Закончить Ход</Button>
                        </Button.Group>
                    </Segment>
                    <Segment textAlign='center'>Инвентарь <br/>
                        <Card.Group itemsPerRow={4}>
                            {playerInfo.cards.inv.map((card, key) =>
                                <ItemCard
                                    key={key}
                                    card={card}
                                />
                            )}
                        </Card.Group>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
        )
    }
}

export default Player

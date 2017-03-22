import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import ItemCard from './cards/itemCard'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Enemy extends Component {
  /**
   * Enemy's inventory and stats
   *
   * @returns {XML}
   */
  render () {
    let enemyInfo = this.props.enemy;
    let total = enemyInfo.stats.lvl + enemyInfo.stats.bonus;
    const styles = {
      height: 200,
      width: 200,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
      lineHeight: '200px'
    };
    return (
      // <Segment.Group>
      //     <Segment.Group horizontal>
      //       <Segment textAlign='center'>Уровень игрока {enemyInfo.stats.lvl}</Segment>
      //       <Segment textAlign='center'>Все бонусы, включая уровень {total}</Segment>
      //     </Segment.Group>
      //     <Segment>
      //       <Card.Group itemsPerRow={3}>
      //         <Card>
      //           <Image src={enemyInfo.stats.race.img}/>
      //           <Card.Content>
      //             <Card.Header>Раса: {enemyInfo.stats.race.name}</Card.Header>
      //           </Card.Content>
      //         </Card>
      //         <Card>
      //           <Image src={enemyInfo.stats.klass.img}/>
      //           <Card.Content>
      //             <Card.Header>Класс: {enemyInfo.stats.klass.name}</Card.Header>
      //           </Card.Content>
      //         </Card>
      //       </Card.Group>
      //     </Segment>
      //     <Segment textAlign='center'>Инвентарь <br/>
      //         <Card.Group itemsPerRow={4}>
      //             {enemyInfo.cards.inv.map((card, key) =>
      //                 <ItemCard
      //                     key={key}
      //                     card={card}
      //                 />
      //             )}
      //         </Card.Group>
      //     </Segment>
      // </Segment.Group>
      <Paper style={styles}>
        {/*<Card>*/}
        {/*<CardMedia>*/}
        {/*<img src={enemyInfo.stats.klass.img} />*/}
        {/*</CardMedia>*/}
        {/*</Card>*/}
        future
      </Paper>
    )
  }
}

export default Enemy;

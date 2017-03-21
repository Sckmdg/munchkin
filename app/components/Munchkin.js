/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react'
import Desk from '../components/desk'
import Enemy from '../components/enemy'
import Battle from '../components/battle'
import Player from '../components/player'
import HandCards from '../components/handCards'
import {GridList, GridTile} from 'material-ui/GridList'
import _ from 'lodash';

class Munchkin extends Component {

    render() {
        const {
            turn, giveOut, putOn, cut, takeRace, takeKlass, deck, player
        } = this.props;

        const styles = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                width: '100%'
            },
            gridList: {
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                width: '100%'
            },
            gridTile: {
                width: '33.333%'
            }
        };

        const doors = _.shuffle(deck.filter(card => card.door === true));
        const treasures = _.shuffle(deck.filter(card => card.door === false));
        const desk = {player};
        return (
            <div className='app container'>
                <div style={styles.root}>
                    <GridList
                        cellHeight={210}
                        style={styles.gridList}>
                        <GridTile >
                            <Enemy
                                cards={deck}
                                enemy={player}
                            />
                        </GridTile>
                        <GridTile>
                            <Enemy
                                cards={deck}
                                enemy={player}
                            />
                        </GridTile>
                        <GridTile>
                            <Enemy
                                cards={deck}
                                enemy={player}
                            />
                        </GridTile>
                    </GridList>
                    <GridList
                        cellHeight={210}
                        style={styles.gridList}>
                        <GridTile >
                            <Enemy
                                cards={deck}
                                enemy={player}
                            />
                        </GridTile>
                        <GridTile >
                            <Desk
                                desk={desk}
                            />
                        </GridTile>
                        <GridTile>
                            <Enemy
                                cards={deck}
                                enemy={player}
                            />
                        </GridTile>
                    </GridList>
                </div>
                    <Battle
                        doors={doors}
                        treasures={treasures}
                        turn={player.turn}
                        playerTotal={player.stats.lvl + player.stats.bonus}
                    />
                <Player
                    player={player}
                    turn={turn}
                />
                <HandCards
                    player={player}
                    deck={deck}
                    giveOut={giveOut}
                    cut={cut}
                    takeRace={takeRace}
                    putOn={putOn}
                    takeKlass={takeKlass}
                />
            </div>
        )
    }
}

Munchkin.propTypes = {
    turn: PropTypes.func.isRequired,
    giveOut: PropTypes.func.isRequired,
    putOn: PropTypes.func.isRequired,
    cut: PropTypes.func.isRequired,
    takeRace: PropTypes.func.isRequired,
    takeKlass: PropTypes.func.isRequired,
    deck: PropTypes.array.isRequired,
    player: PropTypes.object.isRequired
};

export default Munchkin;

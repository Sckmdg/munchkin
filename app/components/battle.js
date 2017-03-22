import React, {Component, PropTypes} from 'react'
import {GridList, GridTile} from 'material-ui/GridList'

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
                width: '100%',
                textAlign: 'center'
            }
        };
        let doorCard = this.props.doors[0];
        if (this.props.turn) {
            return (
                <GridList
                    cellHeight={210}
                    style={styles.gridList}>
                    <GridTile style={styles.gridTile}>
                        <p>Уровень монстра: {doorCard.lvlMstr}</p>
                        <br/>
                        <p>Мощь игрока(ов): {this.props.playerTotal}</p>
                    </GridTile>
                    <GridTile style={styles.gridTile}>
                        <img src={doorCard.img} alt={doorCard.name}/>
                    </GridTile>
                </GridList>
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

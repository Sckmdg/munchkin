/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/actions';
import Desk from '../components/desk';
import Enemies from '../components/enemies';
import Battle from '../components/battle';
import Player from '../components/player';
import HandCards from '../components/handCards';
import _ from 'lodash';

class App extends Component {

    render() {
        const {cards, player, desk} = this.props;
        const doors = _.shuffle(this.props.cards.Deck.filter((card) =>{return card.door == true;}));
        const treasures = _.shuffle(this.props.cards.Deck.filter((card) =>{return card.door == false;}));
        return (
            <div className='app'>
                <h2 className='text-center'>Munchkin</h2>
                <Desk
                    desk={desk}
                />
                <Enemies
                    cards={cards}
                    enemies={player}
                />
                <Battle
                    doors={doors}
                    treasures={treasures}
                    turn={this.props.cards.Player.turn}
                    playerTotal={this.props.cards.Player.stats.lvl + this.props.cards.Player.stats.bonus}
                />
                <Player
                    player={player}
                    turn={this.props.actions.turn}
                />
                <HandCards
                    cards={cards}
                    giveOut={this.props.actions.giveOut}
                    cut={this.props.actions.cut}
                    putOn={this.props.actions.putOn}
                    takeRace={this.props.actions.takeRace}
                    takeKlass={this.props.actions.takeKlass}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cards: state,
        player: state,
        desk: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

App.propTypes = {
    cards: PropTypes.object.isRequired,
    player: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    desk: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
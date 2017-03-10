/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/actions';
import HandCards from '../components/handCards';
import Player from '../components/player';
class App extends Component {

    render() {
        const {cards, player} = this.props;
        return (
            <div className='app'>
                <h2 className='text-center'>Munchkin</h2>
                <Player
                    player={player}
                />
                <HandCards
                    cards={cards}
                    giveOut={this.props.actions.giveOut}
                    pickCard={this.props.actions.pickCard}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cards: state,
        player: state
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
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
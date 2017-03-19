/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/actions';
import HandCards from './handCards';
import Player from './player';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

class Munchkin extends Component {
  render () {
    const { cards, player } = this.props;
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
          putOn={this.props.actions.putOn}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cards: state,
    player: state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

Munchkin.propTypes = {
  cards: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Munchkin)

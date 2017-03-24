/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react'
import connectWrapper from '../redux/utils/connect'
import { rootActions as actions } from '../redux/root'
import Munchkin from '../components/Munchkin'
import '../css/style.css'
class MunchkinView extends Component {
  render () {
    const {
      actions: {
        turn,
        giveOut,
        putOn,
        cut,
        takeRace,
        takeKlass
      }
    } = this.props;

    const deck = this.props.state.deck;
    const player = this.props.state.player.toJS();
    return (
      <Munchkin
        deck={deck}
        player={player}
        turn={turn}
        giveOut={giveOut}
        putOn={putOn}
        cut={cut}
        takeRace={takeRace}
        takeKlass={takeKlass}
      />
    )
  }
}

MunchkinView.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default connectWrapper(actions, MunchkinView)

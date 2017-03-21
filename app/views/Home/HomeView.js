import React, {Component, PropTypes} from 'react';
import { rootActions as actions } from '../../redux/root'
import connectWrapper from '../../redux/utils/connect'
import MunchkinView from '../MunchkinView'

class HomeView extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };
  render () {
    return (
      <MunchkinView
      />
    )
  }
}

export default connectWrapper(actions, HomeView);

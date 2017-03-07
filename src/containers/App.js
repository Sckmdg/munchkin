/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/actions';
import Table from '../components/table';
class App extends Component {

    render() {
        return (
            <div className='app'>
                    <h2 className='text-center'>Munchkin</h2>
                <Table startGame={this.props.actions.startGame} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        startGame: state.startGame
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

App.propTypes = {
    startGame: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
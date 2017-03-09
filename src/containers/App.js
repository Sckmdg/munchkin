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
        const {cards} = this.props;
        return (
            <div className='app'>
                    <h2 className='text-center'>Munchkin</h2>
                <Table cards={cards} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cards: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

App.propTypes = {
    cards: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
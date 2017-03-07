/**
 * Composing components
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import actions from '../actions/actions';
class App extends Component {

    render() {
        const {table} = this.props;
        return (
            <div className='app'>
                    <h2 className='text-center'>Munchkin</h2>
                <Table table={table} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        table: state.table
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

App.propTypes = {
    table: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
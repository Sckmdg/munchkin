import React, {PropTypes, Component} from 'react';
class Table extends Component {
    componentDidMount() {
        this.props.startGame('hi');
    }

    render() {
        return (
            <div className='col-md-12'>
            </div>
        );
    }
}

Table.propTypes = {
    table: PropTypes.object.isRequired
};

export default Canvas
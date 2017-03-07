import React, {Component} from 'react';
class Table extends Component {
    componentDidMount() {
        this.props.startGame('hi');
    }

    render() {
        console.log(this);
        return (
            <div className='col-md-12'>

            </div>
        );
    }
}

export default Table
import React, {PropTypes, Component} from 'react';
class Card extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired
    };

    Pick = () =>{
        this.props.putOn(this.props.card);
    };

    render (){
        const {card} = this.props;
        return (
            <div className='col-md-3 singleCard' onClick={this.Pick}>
                <img src={card.img} alt={card.name}/>
            </div>
        );
    }
}

export default Card
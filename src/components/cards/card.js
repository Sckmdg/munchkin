import React, {PropTypes, Component} from 'react';
class Card extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired
    };

    Pick = () =>{
        const card = this.props.card;
        if (this.props.card.bonus){
            this.props.putOn(card);
        }
        else {
            if (this.props.card.race !== '' ){
                this.props.takeRace(card);
            }
            if (this.props.card.klass !== '' ){
                this.props.takeKlass(card)
            }
            else {
                return(
                    <div>blabla</div>
                )
            }
        }
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
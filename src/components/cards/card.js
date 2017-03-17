import React, {PropTypes, Component} from 'react';
class Card extends Component {

    static propTypes = {
        card: PropTypes.object.isRequired
    };

    Pick = () =>{
        const card = this.props.card;

        if (card.door){

            if (card.race !== '' ){
                this.props.takeRace(card);
            }

            if (card.klass !== '' ){
                this.props.takeKlass(card)
            }

        }
        else {
            if (card.type !== '') {
                this.props.putOn(card);
            }
            else {
                console.log('will be in future');
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
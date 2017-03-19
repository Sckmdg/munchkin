import React, {PropTypes, Component} from 'react';
class Card extends Component {
  static propTypes = {
    card: PropTypes.object.isRequired,
    pickCard: PropTypes.func.isRequired
  };

  Pick =() => {
    this.props.pickCard(this.props.card);
  };

  render () {
    const {card} = this.props;

    let curse = (card.curse === true) ? 'Проклятие!' : '';
    let lvl = (card.lvlMstr === 0) ? '' : 'Уровень ' + card.lvlMstr;
    let lvlUp = (card.lvlUp === 0) ? '' : card.lvlUp + ' Уровня';
    let treasure = (card.treasure === 0) ? '' : card.treasure + ' Сокровища ';
    return (
      <div className='col-md-3 singleCard'>
        <h4 className='text-center'>{curse}</h4>
        <h4 className='text-center'>{lvl}</h4>
        <h4 className='text-center'>{card.name}</h4>
        <img src={card.img} alt={card.name} />
        <p>{card.description}</p>
        <div className='text-left' id='left'>{lvlUp}</div>
        <div className='text-right' id='right'>{treasure}</div>
        <button onClick={this.Pick}>click me</button>
      </div>
    );
  }
}

export default Card

import {createAction, handleActions} from 'redux-actions'
import img0 from '../../img/cards/Selection_000.png';
import img0k from '../../img/cards/Selection_000k.png';
import img3 from '../../img/cards/Selection_003.png';
import img5 from '../../img/cards/Selection_005.png';
import img6 from '../../img/cards/Selection_006.png';
import {fromJS} from 'immutable';

/*
 * Constants
 **/
export const GIVE_OUT = 'GIVE_OUT';
export const PUT_ON = 'PUT_ON';
export const TAKE_RACE = 'TAKE_RACE';
export const TAKE_KLASS = 'TALE_KLASS';
export const TURN = 'TURN';

/*
 * Actions
 **/
export const giveOut = createAction(GIVE_OUT, (cards) => cards);
export const putOn = createAction(PUT_ON, (card) => card);
export const takeRace = createAction(TAKE_RACE, (data) => data);
export const takeKlass = createAction(TAKE_KLASS, (data) => data);
export const turn = createAction(TURN, (isTurn) => isTurn);

export const actions = {
  giveOut,
  putOn,
  takeRace,
  takeKlass,
  turn
};

/*
 * State
 **/
export const race = {
  human: {
    name: 'Человек',
    img: img0
  },
  dwarf: {
    name: 'Дварф',
    img: img3
  },
  elf: {
    name: 'Эльф',
    img: img5
  },
  halfing: {
    name: 'Халфинг'
  }
};

export const klass = {
  sorcer: {
    name: 'Волшебник'
  },
  cliric: {
    name: 'Клирик',
    img: img6
  },
  none: {
    name: 'Без класса',
    img: img0k
  }
};

export const itemType = {
  oneHand: '1 рука',
  twoHand: '2 руки Большая',
  helm: 'Головняк',
  armour: 'Броник',
  boots: 'Обувка'
};

export const initialState = fromJS({
  stats: {
    name: 'Rust',
    gender: true,
    lvl: 1,
    bonus: 0,
    race: race.human,
    klass: klass.none
  },
  cards: {
    handCards: [],
    inv: []
  },
  turn: false
})


/*
 * Reducers
 **/
export default handleActions({
  [GIVE_OUT]: (state, {payload: cards}) => {
    return state.updateIn(['cards', 'handCards'], handCards => handCards.merge(cards));
  },
  [PUT_ON]: (state, {payload: card}) => {
    return state.updateIn(['cards'], cards => cards
      .updateIn(['inv'], inv => inv.push(card))
      .updateIn(['handCards'], cards => cards.filter(entry => entry.get('id') !== card.id)))
      .updateIn(['stats', 'bonus'], bonus => bonus + card.bonus);
  },
  [TAKE_RACE]: (state, {payload: data}) => {
    return state
      .updateIn(['stats', 'race'], race => race.merge(data.race))
      .updateIn(['cards'], cards => cards
        .updateIn(['handCards'], cards => cards.filter(entry => entry.get('id') !== data.id)));
  },
  [TAKE_KLASS]: (state, {payload: data}) => {
    return state
      .updateIn(['stats', 'klass'], klass => klass.merge(data.klass))
      .updateIn(['cards'], cards => cards
        .updateIn(['handCards'], cards => cards.filter(entry => entry.get('id') !== data.id)));
  },
  [TURN]: (state) => {
    return {...state, turn: !state.turn};
  }
}, initialState);

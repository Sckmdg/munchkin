import { createAction, handleActions } from 'redux-actions'
import img3 from '../../img/cards/Selection_003.png';
import img5 from '../../img/cards/Selection_005.png';
import img6 from '../../img/cards/Selection_006.png';

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
export const putOn = createAction(PUT_ON, (data) => data);
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
    name: 'Человек'
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
    name: 'Без класса'
  }
};

export const itemType = {
  oneHand: '1 рука',
  twoHand: '2 руки Большая',
  helm: 'Головняк',
  armour: 'Броник',
  boots: 'Обувка'
};

export const initialState = {
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
};

/*
 * Reducers
 **/
export default handleActions({
  [GIVE_OUT]: (state, { payload: cards }) => {
    return {...state, cards: {...state.cards, handCards: cards}};
  },
  [PUT_ON]: (state, { paylod: data }) => {
    return {...state,
      cards: {...state.cards,
        inv: [...state.cards.inv, data],
        handCards: state.cards.handCards.filter((item) => item.id !== data.id)},
      stats: {...state.stats, bonus: state.stats.bonus + data.bonus}
    };
  },
  [TAKE_RACE]: (state, { payload: data }) => {
    return {...state,
      stats: {...state.stats, race: data.race},
      cards: {...state.cards, handCards: state.cards.handCards.filter((item) => item.id !== data.id)}
    };
  },
  [TAKE_KLASS]: (state, { payload: data }) => {
    return {...state,
      stats: {...state.stats, klass: data.klass},
      cards: {...state.cards, handCards: state.cards.handCards.filter((item) => item.id !== data.id)}
    };
  },
  [TURN]: (state, { payload: data }) => {
    return {...state, turn: !state.turn};
  }
}, initialState);

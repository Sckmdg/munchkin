export const GIVE_OUT = 'GIVE_OUT';
export const PUT_ON = 'PUT_ON';
export const CUT = 'CUT';
export const TAKE_RACE = 'TAKE_RACE';
export const TAKE_KLASS = 'TALE_KLASS';

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
        img:img5
    },
    halfing: {
        name: 'Халфинг'
    }
};

export const klass = {
    sorcer: {
        name: 'Волшебник',
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

export const player = {
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
    }
};

export const desk = {
    players: player,
    turn: ''
};

import img1 from '../img/cards/Selection_001.png';
import img2 from '../img/cards/Selection_002.png';
import img3 from '../img/cards/Selection_003.png';
import img4 from '../img/cards/Selection_004.png';
import img5 from '../img/cards/Selection_005.png';
import img6 from '../img/cards/Selection_006.png';
import img7 from '../img/cards/Selection_007.png';
import img8 from '../img/cards/Selection_008.png';
import img9 from '../img/cards/Selection_009.png';
import img10 from '../img/cards/Selection_010.png';
import img11 from '../img/cards/Selection_011.png';
import img12 from '../img/cards/Selection_012.png';
import img13 from '../img/cards/Selection_013.png';
import img14 from '../img/cards/Selection_014.png';
import img15 from '../img/cards/Selection_015.png';
import img16 from '../img/cards/Selection_016.png';


export const initialState = [
    {
        id: 0,
        door: true,
        img: img1,
        treasure: 1,
        curse: false,
        lvlUp: 1,
        undead: false,
        lvlMstr: 1,
        bonusDisaster: '+3 против клириков',
        race: '',
        klass: '',
        disaster: 'минус 1 lvl',
    },
    {
        id: 1,
        door: true,
        img: img2,
        treasure: 5,
        curse: false,
        lvlUp: 2,
        undead: false,
        lvlMstr: 20,
        bonusDisaster: '',
        race: '',
        klass: '',
        disaster: 'dead',
    },
    {
        id: 2,
        door: true,
        img: img3,
        treasure: 0,
        curse: false,
        lvlUp: 0,
        undead: false,
        lvlMstr: 0,
        bonusDisaster: '',
        race: race.dwarf,
        klass: '',
        disaster: '',
    },
    {
        id: 3,
        door: true,
        img: img4,
        treasure: 0,
        curse: false,
        lvlUp: 0,
        undead: false,
        lvlMstr: 0,
        bonusDisaster: '',
        race: '',
        klass: klass.cliric,
        disaster: ''
    },
    {
        id: 4,
        door: true,
        img: img5,
        treasure: 0,
        curse: true,
        lvlUp: 0,
        undead: false,
        lvlMstr: 0,
        bonusDisaster: '',
        race: race.elf,
        klass: '',
        disaster: ''
    },
    {
        id: 5,
        door: true,
        img: img6,
        treasure: 0,
        curse: false,
        lvlUp: 0,
        undead: false,
        lvlMstr: 0,
        bonusDisaster: '',
        race: '',
        klass: klass.cliric,
        disaster: ''
    },
    {
        id: 6,
        door: false,
        img: img7,
        bonus: 0,
        useOnly: '',
        type: '',
        golds: 400
    },
    {
        id: 7,
        door: false,
        img: img8,
        bonus: 0,
        useOnly: '',
        type: '',
        golds: 1300
    },
    {
        id: 8,
        door: false,
        img: img9,
        bonus: 1,
        useOnly: '',
        type: '',
        golds: 0
    },
    {
        id: 9,
        door: false,
        img: img10,
        bonus: 0,
        useOnly: '',
        type: '',
        golds: 300
    },
    {
        id: 10,
        door: false,
        img: img11,
        bonus: 5,
        useOnly: klass.sorcer,
        type: itemType.oneHand,
        golds: 800
    },
    {
        id: 11,
        door: false,
        img: img12,
        bonus: 3,
        useOnly: race.halfing,
        type: itemType.twoHand,
        golds: 400
    },
    {
        id: 12,
        door: false,
        img: img13,
        bonus: 2,
        useOnly: '',
        type: itemType.armour,
        golds: 400
    },
    {
        id: 13,
        door: false,
        img: img14,
        bonus: 3,
        useOnly: race.halfing,
        type: '',
        golds: 400
    },
    {
        id: 14,
        door: true,
        img: img15,
        treasure: 1,
        curse: false,
        lvlUp: 1,
        undead: false,
        lvlMstr: 1,
        bonusDisaster: '',
        race: '',
        klass: '',
        disaster: 'nothing',
    },
    {
        id: 15,
        door: true,
        img: img16,
        treasure: 1,
        curse: false,
        lvlUp: 1,
        undead: true,
        lvlMstr: 2,
        bonusDisaster: '',
        race: '',
        klass: '',
        disaster: 'something',
    }
];

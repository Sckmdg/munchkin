export const GIVE_OUT = 'GIVE_OUT';
export const PICK_DOOR = 'PICK_DOOR';

export const race = {
    human: 'Человек',
    dwarf: 'Дварф'
};

export const klass = {
    sorcer: 'Волшебник',
    cliric: 'Клирик',
    none: 'Без класса'
};

export const itemType = {
    oneHand: '1 рука',
    twoHand: '2 руки Большая',
    helm: 'Головняк',
    armour: 'Броник',
    boots: 'Обувка'
};

export const player ={
    gender: true,
    lvl: 1,
    bonus: 0,
    race: race.human,
    klass: klass.none,
    playerCards: []
};

import img0 from '../img/img.jpg';

export const initialState = {
    doors: [
        {
            id: 0,
            door: true,
            img: img0,
            treasure: 0,
            curse: false,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            klass: '',
            disaster: '',
            name: 'Расовый Коктейль',
            description: 'Можешь иметь две Расовые карты в комплекте - все радости и горести обеих Рас. Или возьми одну расу, получи все её преимущества и забудь о её недостатках (так, монстры ненавидящие Эльфов, не получат бонус в бою против полуэльфа). Карта теряется вместе с Расовой картой (картами).'
        },
        {
            id: 1,
            door: true,
            img: img0,
            treasure: 0,
            curse: true,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            klass: '',
            disaster: '',
            name: 'Смена Расы',
            description: 'Если у тебя нет Расы это проклятие не действует. В противном случае, начинай прочесывать кучку сброса сверху донизу. Первая Раса, на которую наткнешься, заменяет твою текущую Расу(Расы). Если ты прочесал весь сброс, а Расы не нашел, ты просто теряешь текущую Расу(Расы).'
        },
        {
            id: 2,
            door: true,
            img: img0,
            treasure: 0,
            curse: true,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            klass: '',
            disaster: 'small item -1',
            name: 'Утрата 1 Маленькой Шмотки',
            description: 'Выбери одну маленькую шмотку для сброса. Маленькая - это любая шмотка, на которой не написано, что она Большая.'
        },
        {
            id: 3,
            door: true,
            img: img0,
            treasure: 4,
            curse: false,
            lvlUp: 2,
            lvlMstr: 18,
            race: '',
            klass: '',
            disaster: '',
            name: 'Кальмадзилла',
            description: 'Склизко! Эльфы в -4! Не преследует никого, чей Уровень 4 или ниже, за исключением Эльфов. Непотребство: хватает, сдавливает противными щупальцами и пожирает. Ты мертв. Вопросы, пожелания, высказывания?'
        },
        {
            id: 4,
            door: true,
            img: img0,
            treasure: 0,
            curse: true,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            klass: '',
            disaster: '',
            name: '',
            description: 'Теряешь надетую Обувку.'
        },
        {
            id: 5,
            door: true,
            img: img0,
            treasure: 0,
            curse: false,
            lvlUp: 0,
            lvlMstr: 0,
            race: race.dwarf,
            klass: '',
            disaster: '',
            name: 'Дварф',
            description: 'Можешь надеть любое число Больших шмоток. Можешь держать в <<руке>> 6 карт'
        },
        {
            id: 6,
            door: true,
            img: img0,
            treasure: 0,
            curse: false,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            klass: klass.cliric,
            disaster: '',
            name: 'Клирик',
            description: 'Воскрешение: когда надо вытянуть карту лицом вверх, ты можешь вместо этого взять верхнюю карту из соответствующей кучи сброса. Затем ты должен сбрросить одну карту с <<руки>> Изгнание: можешь сбросить до 3х карт в бою против Андедов. Каждый сброс дает тебе +3 Бонус.'
        }
    ],
    treasures: [
        {
            id: 0,
            door: false,
            img: img0,
            bonus: 0,
            useOnly: '',
            name: 'Меджик Мисайл!',
            description: 'Применить в любом бою. Дает +5 любой стороне. Применить только один раз',
            type: '',
            golds: 300
        },
        {
            id: 1,
            door: false,
            img: img0,
            bonus: 1,
            useOnly: '',
            name: 'Шлем Бесстрашия',
            description: '',
            type: itemType.helm,
            golds: 200
        },
        {
            id: 2,
            door: false,
            img: img0,
            bonus: 1,
            useOnly: '',
            name: 'Кожаный Прикид',
            description: '',
            type: itemType.armour,
            golds: 200
        },
        {
            id: 3,
            door: false,
            img: img0,
            bonus: 3,
            useOnly: '',
            name: 'Бензопила Кровавого Расчленения',
            description: '',
            type: itemType.twoHand,
            golds: 600
        },
        {
            id: 4,
            door: false,
            img: img0,
            bonus: 5,
            useOnly: klass.sorcer,
            name: 'Посох Напалма',
            description: '',
            type: itemType.oneHand,
            golds: 800
        }
    ]
};
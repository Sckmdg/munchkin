export const START_GAME = 'START_GAME';

export const initialState = {
    doors: [
        {
            id: 0,
            treasure: 0,
            curse: false,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            class: '',
            disaster: '',
            name: 'Расовый Коктейль',
            description: 'Можешь иметь две Расовые карты в комплекте - все радости и горести обеих Рас. Или возьми одну расу, получи все её преимущества и забудь о её недостатках (так, монстры ненавидящие Эльфов, не получат бонус в бою против полуэльфа). Карта теряется вместе с Расовой картой (картами).'
        },
        {
            id: 1,
            treasure: 0,
            curse: true,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            class: '',
            disaster: '',
            name: 'Смена Расы',
            description: 'Если у тебя нет Расы это проклятие не действует. В противном случае, начинай прочесывать кучку сброса сверху донизу. Первая Раса, на которую наткнешься, заменяет твою текущую Расу(Расы). Если ты прочесал весь сброс, а Расы не нашел, ты просто теряешь текущую Расу(Расы).'
        },
        {
            id: 2,
            treasure: 0,
            curse: true,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            class: '',
            disaster: 'small item -1',
            name: 'Утрата 1 Маленькой Шмотки',
            description: 'Выбери одну маленькую шмотку для сброса. Маленькая - это любая шмотка, на которой не написано, что она Большая.'
        },
        {
            id: 3,
            treasure: 4,
            curse: false,
            lvlUp: 2,
            lvlMstr: 18,
            race: '',
            class: '',
            disaster: 'blablabla',
            name: 'Кальмадзилла',
            description: 'Склизко! Эльфы в -4! Не преследует никого, чей Уровень 4 или ниже, за исключением Эльфов. Непотребство: хватает, сдавливает противными щупальцами и пожирает. Ты мертв. Вопросы, пожелания, высказывания?'
        },
        {
            id: 4,
            treasure: 0,
            curse: true,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            class: '',
            disaster: 'blablabla',
            name: '',
            description: 'Теряешь надетую Обувку.'
        },
        {
            id: 5,
            treasure: 0,
            curse: false,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            class: '',
            disaster: 'blablabla',
            name: 'Дварф',
            description: 'Можешь надеть любое число Больших шмоток. Можешь держать в <<руке>> 6 карт'
        },
        {
            id: 6,
            treasure: 0,
            curse: false,
            lvlUp: 0,
            lvlMstr: 0,
            race: '',
            class: '',
            disaster: 'blablabla',
            name: 'Клирик',
            description: 'Воскрешение: когда надо вытянуть карту лицом вверх, ты можешь вместо этого взять верхнюю карту из соответствующей кучи сброса. Затем ты должен сбрросить одну карту с <<руки>> Изгнание: можешь сбросить до 3х карт в бою против Андедов. Каждый сброс дает тебе +3 Бонус.'
        }
    ],
    treasures: [
        {
            id: 0,
            bonus: 0,
            useOnly: '',
            name: 'Меджик Мисайл!',
            description: 'Применить в любом бою. Дает +5 любой стороне. Применить только один раз',
            type: '',
            golds: 300
        },
        {
            id: 1,
            bonus: 1,
            useOnly: '',
            name: 'Шлем Бесстрашия',
            description: '',
            type: 'Головняк',
            golds: 200
        },
        {
            id: 2,
            bonus: 1,
            useOnly: '',
            name: 'Кожаный Прикид',
            description: '',
            type: 'Броник',
            golds: 200
        },
        {
            id: 3,
            bonus: 3,
            useOnly: '',
            name: 'Бензопила Кровавого Расчленения',
            description: '',
            type: '2 Руки Большая',
            golds: 600
        },
        {
            id: 4,
            bonus: 5,
            useOnly: 'Применяется только Волшебником',
            name: 'Посох Напалма',
            description: '',
            type: '1 Рука',
            golds: 800
        }
    ]
};
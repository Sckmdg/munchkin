import {
    initialState,
    CUT
} from '../constants/constants';

export function HandCards(state = initialState, action) {
    switch (action.type){
        case CUT:
             return state.filter( (item) => item.id !== action.payload);
    }
    return state
}

import {

    initialState
} from '../constants/constants';

export function (state = initialState, action) {
    switch (action.type) {
        case CREATE_CANVAS:
            return {...state, : action.payload};
        default:
            return state
    }
}
import {
    GIVE_OUT,
    PICK_CARD
} from '../constants/constants';

export function giveOut(card) {
    return (dispatch) => {
        dispatch({
            type: GIVE_OUT,
            payload: card
        })
    }
}

export function pickCard(card) {
    return (dispatch) => {
        dispatch({
            type: PICK_CARD,
            payload: card
        })
    }
}

export default {giveOut, pickCard}
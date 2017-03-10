import {
    GIVE_OUT
} from '../constants/constants';

export function giveOut(card) {
    return (dispatch) => {
        dispatch({
            type: GIVE_OUT,
            payload: card
        })
    }
}

export default {giveOut}
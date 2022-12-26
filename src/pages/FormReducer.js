import { ActionTypes } from "./ActionTypes";

export const initialState = {
    firstName: '',
    lustName: '',
    email: '',
    gender: '',
    education: '',
    quantity: 0,
    feedback: '',
    term: false
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            };
        case ActionTypes.TOGGLE:
            return {
                ...state,
                term: state.term,
            };
        default:
            return state;
    }
};
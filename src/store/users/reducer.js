import { ADD_USER } from './const';

const inisialState = [];

export const usersReducer = (state = inisialState, action) => {
    switch (action.type) {
        case ADD_USER: {
            return state.some((user) => user.uid === action.payload.uid)
                ? state
                : [...state, action.payload];
        }
        default: {
            return state;
        }
    }
};

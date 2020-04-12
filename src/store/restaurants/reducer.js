import { ADD_RESTAURANT, REMOVE_RESTAURANT, UPDATE_RESTAURANT } from './const';

const initialState = [];

export const restaurantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESTAURANT: {
            return state.some((restaurant) => restaurant.uid === action.payload.uid)
                ? state
                : [...state, action.payload];
        }
        case REMOVE_RESTAURANT: {
            return state.filter((restaurant) => restaurant.uid !== action.payload);
        }
        case UPDATE_RESTAURANT: {
            return state.map((restaurant) => {
                return restaurant.uid === action.payload.uid ? action.payload : restaurant;
            });
        }
        default: {
            return state;
        }
    }
};

import { ADD_RESTAURANT, REMOVE_RESTAURANT, UPDATE_RESTAURANT } from './const';

export const addRestaurant = (restaurant) => ({
    type: ADD_RESTAURANT,
    payload: restaurant,
});

export const removeRestaurant = (uid) => ({
    type: REMOVE_RESTAURANT,
    payload: uid,
});

export const updateRestaurant = (restaurant) => ({
    type: UPDATE_RESTAURANT,
    payload: restaurant,
});

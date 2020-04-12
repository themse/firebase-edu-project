import { combineReducers } from 'redux';
import { authReducer } from './auth/reducer';
import { usersReducer } from './users/reducer';
import { restaurantsReducer } from './restaurants/reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    users: usersReducer,
    restaurants: restaurantsReducer,
});

import { SIGN_IN, SIGN_OUT } from './const';

const initialState = null;

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN: {
			return action.payload;
		}
		case SIGN_OUT: {
			return null;
		}
		default: {
			return state;
		}
	}
};

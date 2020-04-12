import { ADD_USER } from './const';

export const addUser = (user) => ({
    type: ADD_USER,
    payload: {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
    },
});

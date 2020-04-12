import { SIGN_IN, SIGN_OUT } from './const';

export const signIn = (user) => ({
    type: SIGN_IN,
    payload: {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        uid: user.uid,
    },
});

export const signOut = () => ({
    type: SIGN_OUT,
});

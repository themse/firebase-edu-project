import { auth, googleAuthProvider } from '../../common/firebase';
import { signIn, signOut } from './actions';

export const signInRequest = () => async () => {
    auth.signInWithPopup(googleAuthProvider);
};

export const signOutRequest = () => async () => {
    auth.signOut();
};

export const startListeningToAuthChanges = () => async (dispatch) => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            dispatch(signIn(user));
        } else {
            dispatch(signOut());
        }
    });
};

import { auth, googleAuthProvider } from '../../common/firebase';
import { signIn, signOut } from './actions';
import { database } from '../../common/firebase';

const usersRef = database.ref('/users');

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
            const { displayName, photoURL, uid, email } = user;
            usersRef.child(user.uid).set({ displayName, photoURL, uid, email });
        } else {
            dispatch(signOut());
        }
    });
};

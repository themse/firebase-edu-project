import { auth, googleAuthProvider } from '../../common/firebase';
import { signIn, signOut } from './actions';

export const signInRequest = () => {
    const user = await auth.signInWithPopup(googleAuthProvider);
    dispatch(signIn(user));
};

export const signOutRequest = () => async dispatch => {
    await auth.signOut();
    dispatch(signOut());
};

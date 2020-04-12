import { database } from '../../common/firebase';
import { addUser } from './actions';

const usersRef = database.ref('/users');

export const startListeningForUsers = () => async (dispatch) => {
    usersRef.on('child_added', (snapshot) => {
        dispatch(addUser(snapshot.val()));
    });
};

import { database, storage } from '../../common/firebase';
import { addRestaurant, removeRestaurant } from './actions';

const restaurantsRef = database.ref('/restaurants');
const storageRef = storage.ref('/restaurants');

export const addRestaurantRequest = (name, file = null) => async (_, getState) => {
    const { auth } = getState();
    const restaurantStorageRef = storageRef.child(auth.uid);

    const newRestaurant = {};
    newRestaurant.name = name;

    if (file) {
        const uploadTask = restaurantStorageRef
            .child(file.name)
            .put(file, { contentType: file.type });

        /* TODO create loader redux and rewrite this
            uploadTask.on('state_changed', (snapshot) => {
                const download = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setIsLoading(download !== 100);
            });   
        */
        newRestaurant.imageUrl = await uploadTask.then((snapshot) => snapshot.ref.getDownloadURL());
    }

    restaurantsRef.push(newRestaurant);
};

export const removeRestaurantRequest = () => async (dispatch) => {};

export const startListeningForRestaurants = () => async (dispatch) => {
    restaurantsRef.on('child_added', (snapshot) => {
        dispatch(addRestaurant({ ...snapshot.val(), uid: snapshot.key }));
    });

    // restaurantsRef.on('child_removed', (snapshot) => {
    //     dispatch(removeRestaurant(snapshot))
    // })
};

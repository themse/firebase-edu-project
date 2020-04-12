import React from 'react';
import { database } from '../../common/firebase';
import { RestaurantItem } from './restaurant-item';

export const RestaurantList = ({ restaurants, user }) => {
    // const restaurantRef = database.ref('/restaurants');

    const handleSelect = (key) => {
        // restaurantRef.child(key).child('votes').child(user.uid).set(user.displayName);
    };

    const handleDeselect = (key) => {
        // restaurantRef.child(key).child('votes').child(user.uid).remove();
    };

    return restaurants.map((restaurant) => {
        return (
            <div key={restaurant.uid} className="col-sm-4">
                <RestaurantItem
                    {...restaurant}
                    user={user}
                    handleSelect={() => handleSelect(restaurant.uid)}
                    handleDeselect={() => handleDeselect(restaurant.uid)}
                />
            </div>
        );
    });
};

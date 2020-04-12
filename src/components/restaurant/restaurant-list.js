import React from 'react';
import { RestaurantItem } from './restaurant-item';

export const RestaurantList = ({
    restaurants,
    user,
    handleSelect,
    handleDeselect,
    handleRemove,
}) => {
    return restaurants.map((restaurant) => (
        <div key={restaurant.uid} className="col-sm-4">
            <RestaurantItem
                {...restaurant}
                user={user}
                handleRemove={() => handleRemove(restaurant.uid)}
                handleSelect={() => handleSelect(restaurant.uid)}
                handleDeselect={() => handleDeselect(restaurant.uid)}
            />
        </div>
    ));
};

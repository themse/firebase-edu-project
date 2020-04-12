import React from 'react';
import { NewRestaurant } from './new-restaurant';
import { RestaurantList } from './restaurant-list';

export const Restaurant = ({ restaurants, auth, addRestaurant, removeRestaurant }) => {
    return (
        <div className="container">
            <p className="display-4">Restaurants</p>
            <div className="row">
                <div className="col-sm-9">
                    <div className="row">
                        <RestaurantList restaurants={restaurants} user={auth} />
                    </div>
                </div>
                <div className="col-sm-3">
                    <NewRestaurant user={auth} addHandle={addRestaurant} />
                </div>
            </div>
        </div>
    );
};

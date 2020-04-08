import React from "react";
import { database } from "../../common/firebase";
import { RestaurantItem } from "./restaurant-item";

export const RestaurantList = ({ restaurants, user }) => {
  const restaurantRef = database.ref("/restaurants");

  const handleSelect = (key) => {
    restaurantRef
      .child(key)
      .child("votes")
      .child(user.uid)
      .set(user.displayName);
  };

  const handleDeselect = (key) => {
    restaurantRef.child(key).child("votes").child(user.uid).remove();
  };

  return restaurants.map(([key, restaurant]) => {
    return (
      <div key={key} className="col-sm-4">
        <RestaurantItem
          {...restaurant}
          user={user}
          handleSelect={() => handleSelect(key)}
          handleDeselect={() => handleDeselect(key)}
        />
      </div>
    );
  });
};

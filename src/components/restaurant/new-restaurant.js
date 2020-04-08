import React, { useState } from "react";
import { database } from "../../common/firebase";

export const NewRestaurant = () => {
  const [name, setName] = useState("");
  const restaurantsRef = database.ref("/restaurants");

  const onSubmit = (event) => {
    event.preventDefault();
    if (name.length === 0) {
      return;
    }
    restaurantsRef.push({ name });
    setName('');
    
  };

  const onChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="form-group">
        <label htmlFor="title">add restaurant</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={name}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

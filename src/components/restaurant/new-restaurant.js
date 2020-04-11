import React, { useState, useRef } from "react";
import { database, storage } from "../../common/firebase";

export const NewRestaurant = ({ user }) => {
  const restaurantsRef = database.ref("/restaurants");
  const storageRef = storage.ref("/restaurants").child(user.uid);

  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const inputFileRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const newRestaurant = {};

    if (name.length === 0) {
      return;
    }
    newRestaurant.name = name;

    newRestaurant.imageUrl = await storageRef
      .child(file.name)
      .put(file, { contentType: file.type })
      .then((snapshot) => snapshot.ref.getDownloadURL());

    restaurantsRef.push(newRestaurant);

    setName("");
    setFile(null);
    setImagePreview(null);
    inputFileRef.current.value = "";
  };

  const onChange = (event) => {
    setName(event.target.value);
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    setFile(file);
  };

  return (
    <form onSubmit={onSubmit} className="mb-4 jumbotron">
      <div className="form-group">
        <label htmlFor="title">
          Add <b>new</b> restaurant
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter title"
          value={name}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="file-upload">Upload file</label>
        {imagePreview && (
          <div className="mb-2">
            <img
              src={imagePreview}
              alt={name}
              className="img-thumbnail img-fluid"
              style={{ width: "350px" }}
            />
          </div>
        )}
        <input
          name="image"
          accept=".png, .jpg, .jpeg"
          type="file"
          className="form-control-file"
          id="file-upload"
          ref={inputFileRef}
          onChange={onFileChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

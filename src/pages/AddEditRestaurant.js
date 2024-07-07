import React, { useState, useEffect } from "react";
import { useParams, useHistory, useNavigate } from "react-router-dom";
import {
  fetchRestaurants,
  addRestaurant,
  updateRestaurant,
} from "../api/mockData";

const AddEditRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  const [restaurant, setRestaurant] = useState({
    name: "",
    description: "",
    location: "",
  });

  useEffect(() => {
    if (isEditMode) {
      const fetchData = async () => {
        const result = await fetchRestaurants();
        const restaurantToEdit = result.find((r) => r.id === parseInt(id));
        setRestaurant(
          restaurantToEdit || { name: "", description: "", location: "" }
        );
      };
      fetchData();
    }
  }, [id, isEditMode]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      await updateRestaurant(restaurant);
      alert("Restaurant updated!");
    } else {
      await addRestaurant(restaurant);
      alert("Restaurant added!");
    }
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant((prevRestaurant) => ({
      ...prevRestaurant,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>
        {window.location.pathname.includes("edit") ? "Edit" : "Add"} Restaurant
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={restaurant.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={restaurant.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={restaurant.location}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {isEditMode ? "Update" : "Add"} Restaurant
        </button>
      </form>
    </>
  );
};

export default AddEditRestaurant;

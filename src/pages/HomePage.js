import React, { useState, useEffect } from "react";
import { fetchRestaurants, deleteRestaurant } from "../api/mockData";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchRestaurants();
      setRestaurants(result);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteRestaurant(id);
    setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
  };

  return (
    <div>
      <h1>Foodie Delight</h1>
      <Link className="add" to="/add">Add Restaurant</Link>
          <ul>
            {restaurants.map((restaurant) => (
              <li key={restaurant.id}>
                <div>
                  <h2>{restaurant.name}</h2>
                  <p>
                    {restaurant.description}, {restaurant.location}
                  </p>
                </div>
                <Link to={`/edit/${restaurant.id}`}>
                  <button>Edit</button>
                </Link>
                <button
                  className="delete"
                  onClick={() => handleDelete(restaurant.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
    </div>
  );
};

export default HomePage;

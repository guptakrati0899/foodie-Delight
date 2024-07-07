import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEditRestaurant from './pages/AddEditRestaurant';
import "./styles/styles.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/add" element={<AddEditRestaurant />} />
      <Route path="/edit/:id" element={<AddEditRestaurant />} />
    </Routes>
  </Router>
);

export default App;

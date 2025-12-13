// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
            <Route path="/products" element={<ProductsPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

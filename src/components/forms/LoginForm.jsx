import React, { useState } from 'react';
import axios from 'axios';
import AuthTabs from './AuthTabs';



export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const response = await axios.post('http://tenant1.localhost:8000/api/login/', formData);

      alert(response.data.message);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error || 'Login failed');
      } else {
        alert('Server is unreachable');
      }
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Work Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <div className="relative">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mt-6 tracking-wide"
      >
        LOG IN
      </button>
    </form>
  );
}

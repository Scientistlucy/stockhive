import React, { useState } from 'react';
import axios from 'axios';
import AuthTabs from './AuthTabs';

export default function TenantRegistrationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    businessType: '',
    address: '',
    city: '',
    county: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://tenant1.localhost:8000/api/signup/', formData);
      alert('Account created successfully!');
      setFormData({
        companyName: '',
        email: '',
        businessType: '',
        address: '',
        city: '',
        county: '',
        phone: '',
        password: ''
      });
    } catch (error) {
      alert('Error creating account');
      console.error(error);
    }
  };

  return (
    <>
    <AuthTabs activeTab="register" />
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Create Your Account
      </h2>
      <p className="text-gray-500 mb-8 text-sm">
        Start managing your inventory today
      </p>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="businessType"
          placeholder="Business Type / Industry"
          value={formData.businessType}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="city"
          placeholder="Town/City"
          value={formData.city}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="county"
          placeholder="County"
          value={formData.county}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Company Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          required
        />

        <button
          type="submit"
          className="md:col-span-2 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mt-4 tracking-wide"
        >
          SIGN UP
        </button>
      </form>
    </>
  );
}

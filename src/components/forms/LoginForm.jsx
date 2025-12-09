import React from 'react';

export default function LoginForm() {
  return (
    <>
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button className="px-5 py-2 border-2 border-blue-600 text-blue-600 rounded-md font-semibold text-sm">
          LOG IN
        </button>
        <button className="px-5 py-2 text-gray-500 font-semibold text-sm hover:text-blue-600">
          REGISTER
        </button>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Welcome Back
      </h2>
      <p className="text-gray-500 mb-8 text-sm">
        Log in to your account
      </p>

      {/* Form */}
      <form className="space-y-4">
        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            placeholder="Work Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg cursor-pointer">
            👁️
          </span>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 mt-6 tracking-wide"
        >
          LOG IN
        </button>
      </form>
    </>
  );
}

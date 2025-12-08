import React from 'react';

export default function TenantRegistrationForm() {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
      <p className="text-gray-500 mb-6">Start managing your inventory today</p>

      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Work Email"
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded px-4 py-2"
          />
        </div>

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}

import React from 'react';
import TenantRegistrationForm from '../components/forms/TenantRegistrationForm';
import AuthImage from '../assets/images/auth.png';

export default function Register() {
  return (
    <div className="min-h-screen flex">
      {/* Left: form */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 p-10">
        <TenantRegistrationForm />
      </div>

      {/* Right: image */}
      <div className="flex-1 hidden md:flex">
        <img
          src={AuthImage}
          alt="Authentication Illustration"
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
    </div>
  );
}

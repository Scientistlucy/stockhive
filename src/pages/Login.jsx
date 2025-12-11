import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import AuthImage from '../assets/images/auth.png';
import AuthTabs from '../components/forms/AuthTabs';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl flex overflow-hidden max-w-5xl w-full">
        <div className="w-full md:w-1/2 p-8 lg:p-12">
          <AuthTabs activeTab="login" />
          <LoginForm />
        </div>
        <div className="hidden md:block md:w-1/2 bg-gray-900">
          <img
            src={AuthImage}
            alt="Authentication Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

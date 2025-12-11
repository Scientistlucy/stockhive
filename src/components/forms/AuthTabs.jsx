import React from "react";
import { Link } from "react-router-dom";

export default function AuthTabs({ activeTab }) {
  return (
    <div className="flex space-x-6 mb-8">
      <Link
        to="/login"
        className={`pb-2 text-lg ${
          activeTab === "login"
            ? "border-b-2 border-blue-600 font-semibold text-blue-600"
            : "text-gray-500"
        }`}
      >
        Login
      </Link>

      <Link
        to="/register"
        className={`pb-2 text-lg ${
          activeTab === "register"
            ? "border-b-2 border-blue-600 font-semibold text-blue-600"
            : "text-gray-500"
        }`}
      >
        Register
      </Link>
    </div>
  );
}

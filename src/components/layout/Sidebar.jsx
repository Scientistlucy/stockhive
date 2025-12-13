import React, { useState } from "react";
import {
  HomeIcon,
  CubeIcon,
  ShoppingCartIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: HomeIcon },
    { name: "Inventory", icon: CubeIcon },
    { name: "Orders", icon: ShoppingCartIcon },
    { name: "Departments", icon: BuildingLibraryIcon },
    { name: "Analytics", icon: ChartBarIcon },
    { name: "Users / Roles", icon: UsersIcon },
    { name: "Settings", icon: CogIcon },
  ];

  const handleLogout = () => {
    console.log("Logging out...");
    // Here you can call your API to logout
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-60 bg-white py-6 border-r border-gray-200">
      {/* Logo */}
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-bold text-indigo-600">YourLogo</h1>
      </div>

      {/* Navigation */}
      <nav className="px-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActiveItem(item.name)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-700"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
              {item.name}
            </button>
          );
        })}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 mt-6 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          Sign Out
        </button>
      </nav>
    </aside>
  );
}

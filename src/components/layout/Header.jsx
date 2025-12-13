import React from "react";
import Flag from "react-world-flags";
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  BellIcon, 
  ChevronDownIcon 
} from "@heroicons/react/24/outline";

export default function Header({ title }) {
  return (
    <header
      className="fixed top-0 left-60 right-0 h-18 bg-white border-b border-gray-100 z-20 flex items-center px-8"
      aria-label="Top header"
    >
      {/* Page Title */}
      <div className="mr-8">
        <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
      </div>

      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative bg-gray-50 rounded-lg border border-gray-200">
          <MagnifyingGlassIcon 
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-500" 
          />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-gray-50 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="ml-auto flex items-center gap-6">
        {/* Language Selector */}
        <button className="flex items-center gap-2 text-sm text-[#2A3752] hover:text-[#2A3752] p-1">
          <div className="w-5 h-5 rounded-full overflow-hidden border border-gray-200">
            <Flag code="US" className="w-full h-full object-cover" />
          </div>
          <span className="text-[#2A3752] font-medium">Eng (US)</span>
          <ChevronDownIcon className="w-4 h-4 text-gray-400" />
        </button>

        {/* Notification Bell */}
        <button className="relative flex items-center justify-center h-10 w-10 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors">
          <BellIcon 
            className="w-5 h-5 text-amber-500" 
          />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 bg-white p-2">
          <div className="w-12 h-12 rounded-full border border-gray-900 flex items-center justify-center">
            <UserIcon className="w-6 h-6 text-[#2A3752]" /> 
          </div>
          <div className="flex flex-col leading-none -space-y-0.5">
            <span className="text-sm font-semibold text-[#2A3752]">Lucy  Mwaura</span> 
            <span className="text-xs text-[#80889B] font-normal">Admin</span> 
          </div>
          <ChevronDownIcon className="w-4 h-4 text-gray-500 ml-3" /> 
        </div>
      </div>
    </header>
  );
}

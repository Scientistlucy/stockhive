import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import AddProductModal from './AddProductModal';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  StarIcon,
} from "@heroicons/react/20/solid";



// Main Products Page Component
export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProduct = (productData) => {
    console.log("New product added:", productData);
    setIsModalOpen(false); // close modal after submission
    // TODO: Add code to actually save product
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[240px] flex flex-col min-h-screen overflow-hidden">
        <Header title="Products" />
        <main className="flex-1 p-6 md:p-8 bg-gray-50 overflow-y-auto">
          <div className="max-w-[1920px] mx-auto">
            <ProductsTable
              onOpenModal={() => setIsModalOpen(true)}
              onAddProduct={handleAddProduct}
            />
            <AddProductModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onSubmit={handleAddProduct}
            />
          </div>
        </main>
      </div>
    </div>
  );
}


function ProductsTable({ onOpenModal, onAddProduct }){
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceRange, setPriceRange] = useState("$100-$200");

  const products = [
    {
      id: 1,
      name: "HP Pavilion 15-I 11-Inch Gaming Laptop",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=100&h=100&fit=crop",
      price: "$980.99",
      category: "Electronics",
      stock: 5,
      sku: "RD46G504",
      rating: 4.9,
      status: "Active",
    },
    {
      id: 2,
      name: "Samsung SM-A236 Galaxy A23S",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&h=100&fit=crop",
      price: "$350",
      category: "Electronics",
      stock: 25,
      sku: "MVC7H27P",
      rating: 4.65,
      status: "Active",
    },
    {
      id: 3,
      name: "Ultimate Ears Wonderboom Bluetooth Speaker",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100&h=100&fit=crop",
      price: "$119.99",
      category: "Electronics",
      stock: 10,
      sku: "MVC7H27P",
      rating: 4.65,
      status: "Out of Stock",
    },
  ];

  // Filter products based on search and filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || product.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusBadge = (status) => {
    const styles = {
      Active: "bg-green-100 text-green-700 border border-green-200",
      "Out of Stock": "bg-orange-100 text-orange-700 border border-orange-200",
      "Closed for Sale": "bg-red-100 text-red-700 border border-red-200",
    };
    return (
      <span className={`px-3 py-1 rounded text-xs font-medium whitespace-nowrap inline-block ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">


        <div className="w-full bg-gray-50 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Product Consumed */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">TOTAL PRODUCT CONSUMED</p>
              <p className="text-2xl font-bold text-gray-900">4621.00 KG</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-red-500">↑ 100%</span>
            <span className="text-gray-600 ml-1">increase from previous month</span>
          </div>
        </div>

        {/* Consumed Product Cost */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">Consumed Product Cost</p>
              <p className="text-2xl font-bold text-gray-900">KES 55968.97</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-red-500">↑ 100%</span>
            <span className="text-gray-600 ml-1">increase from previous month</span>
          </div>
        </div>

        {/* Total Product Purchased */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">TOTAL PRODUCT PURCHASED</p>
              <p className="text-2xl font-bold text-gray-900">KES 409631.00</p>
            </div>
            <div className="bg-cyan-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center text-sm">
            <span className="text-red-500">↑ 9643.8%</span>
            <span className="text-gray-600 ml-1">increase from previous month</span>
          </div>
        </div>

        {/* Product Stock Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">PRODUCT STOCK STATUS</p>
              <p className="text-2xl font-bold text-gray-900">In Stock: 7 Types</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded">Low Stock: 2</span>
            <span className="px-2 py-1 bg-gray-700 text-white text-xs rounded">Expired: 15</span>
            <span className="px-2 py-1 bg-teal-500 text-white text-xs rounded">In Stock: 7</span>
            <span className="px-2 py-1 bg-gray-500 text-white text-xs rounded">Out of Stock: 1</span>
          </div>
        </div>
      </div>
    </div>
       
      {/* Header with Search and Filters */}
    <div className="bg-white rounded-lg border border-gray-200 p-4 w-full  mx-auto my-10">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 flex-1">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <svg 
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
              <input
                type="text"
                placeholder="Search product.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
               <span className="text-sm font-medium text-gray-900">Status</span>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
             <span className="text-sm font-medium text-gray-900">Category</span>
            </div>

           {/* Price Range */}
<div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white">
  <span className="text-sm text-gray-400">Price:</span>
  <div className="relative">
    <select 
      value={priceRange}
      onChange={(e) => setPriceRange(e.target.value)}
      className="text-sm text-gray-900 border-none focus:outline-none cursor-pointer appearance-none pr-6 bg-white"
    >
      <option>$100-$200</option>
      <option>$200-$500</option>
      <option>$500-$1000</option>
    </select>
    {/* Custom gray arrow */}
    <svg 
      className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
       <button
  onClick={onOpenModal}
  className="flex items-center gap-2 px-4 py-2 border bg-white rounded-lg hover:bg-gray-50 transition text-sm font-medium"
  style={{ color: '#0F3659', borderColor: '#C3D3E2' }}
>
  New Product
</button>

    
            <button 
              className="flex items-center gap-2 px-4 py-2 border bg-white rounded-lg hover:bg-gray-50 transition text-sm font-medium" 
              style={{ color: '#0F3659', borderColor: '#C3D3E2' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" style={{ color: '#0F3659' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
              </svg>
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/>
              </th>
              <th className="px-4 py-3 text-left">Product Name</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Category</th>
              <th className="px-4 py-3 text-left">Stock</th>
              <th className="px-4 py-3 text-left">SKU</th>
              <th className="px-4 py-3 text-left">Rating</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-4 py-4"><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"/></td>
                <td className="px-4 py-4 flex items-center gap-3">
                  <img src={product.image} alt={product.name} className="w-10 h-10 rounded object-cover"/>
                  <span className="text-sm text-gray-900">{product.name}</span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-900">{product.price}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{product.category}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{product.stock}</td>
                <td className="px-4 py-4 text-sm text-gray-900">{product.sku}</td>
                <td className="px-4 py-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-gray-900">{product.rating}</span>
                </td>
                <td className="px-4 py-4">{getStatusBadge(product.status)}</td>
                <td className="px-4 py-4 text-gray-500 cursor-pointer hover:text-gray-900">•••</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-500">
          {filteredProducts.length} of {products.length} row(s) selected
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <button className="px-3 py-1 text-sm text-gray-800 bg-white border border-gray-300 rounded">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}




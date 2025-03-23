"use client";
import { Bell, Menu } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center w-full mb-7">
      {/* Left Side  */}
      <div className="flex justify-between items-center gap-5">
        <button
          className=" px-3 py-3 bg-gray-800 rounded-full hover:bg-blue-800"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      <div className=" relative">
        <input
          type="search"
          placeholder="Start type to search grups and  products"
          className=" pl-10 pr-4 py-2 w-48 md:w-72 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 "
        />
        <div className=" absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-non">
          <Bell className=" text-gray-500 " size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

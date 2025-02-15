import React, { useEffect, useState } from "react";
import { GrMenu } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MoonIcon,SunIcon } from "@heroicons/react/16/solid";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-md bg-white dark:bg-gray-900 dark:text-white transition">
      {/* Left Side - Menu & Logo */}
      <div className="flex items-center gap-4">
        <GrMenu className="text-2xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition" />
        <img src="logo.png" alt="YouTube" className="w-28 cursor-pointer" />
      </div>

      {/* Center - Search Bar */}
      <div className="flex w-[40%] items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-l-full outline-none focus:border-blue-500 transition dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        />
        <button className="px-4 py-2 border border-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition rounded-r-full">
          <CiSearch className="text-xl" />
        </button>
        <FaMicrophone
          size={42}
          className="ml-3 border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 transition"
        />
      </div>

      {/* Right Side - Profile & Dark Mode */}
      <div className="flex items-center gap-5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-1 bg-gray-500 text-white rounded-lg hover:bg-gray-500 transition"
        >
          {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" />
 :          <MoonIcon className="w-6 h-6 text-gray-700 dark:text-white" />


}
        </button>
        <CgProfile className="text-3xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition" />
      </div>
    </div>
  );
}

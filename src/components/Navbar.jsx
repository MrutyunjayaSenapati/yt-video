import React from "react";
import { GrMenu } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
    

  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-md bg-white">
      {/* Left Side - Menu & Logo */}
      <div className="flex items-center gap-4">
        <GrMenu className="text-2xl cursor-pointer hover:text-gray-600 transition" />
        <img
          src="logo.png"
          alt="YouTube"
          className="w-28 cursor-pointer"
        />
      </div>

      {/* Center - Search Bar */}
      <div className="flex w-[40%] items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-l-full outline-none focus:border-blue-500 transition"
        //   onChange={(e)=> }
        //   onKeyUp={searchQueryHandler}
        //   value={searchQuery}
        />
        <button className="px-4 py-2 border border-gray-300 bg-gray-100 hover:bg-gray-200 transition rounded-r-full">
          <CiSearch className="text-xl" />
        </button>
        <FaMicrophone
          size={42}
          className="ml-3 border border-gray-300 rounded-full p-2 cursor-pointer hover:bg-gray-200 transition"
        />
      </div>

      {/* Right Side - Notifications & Profile */}
      <div className="flex items-center gap-5">
        <MdNotificationsNone className="text-2xl cursor-pointer hover:text-gray-600 transition" />

        <CgProfile className="text-3xl cursor-pointer hover:text-gray-600 transition" />
      </div>
    </div>
  );
}

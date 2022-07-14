import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="w-full h-20 z-10 bg-stone-800 fixed ">
      <div className="flex justify-between items-center w-full h-full px-4">
        <div className="flex">
          <h1 className="text-l font-bold text-white hover:text-cyan-50 sm:text-xl">
            <a href="#">Next Steps Athletics</a>
          </h1>
        </div>
        {/* Look at implementing border-b-2 ease in from middle out */}
        <div className="flex items-center">
          <ul className="text-white hidden lg:flex">
            <li className="uppercase hover:text-indigo-50 px-4">
              <a href="#">Amenities</a>
            </li>
            <li className="uppercase hover:text-indigo-50 px-4">
              <a href="#">Classes</a>
            </li>
            <li className="uppercase hover:text-indigo-50 px-4">
              <a href="#">Membership</a>
            </li>
            <li className="uppercase hover:text-indigo-50 px-4">
              <a href="#">Booking</a>
            </li>
            <li className="uppercase hover:text-indigo-50 px-4">
              <a href="#">Locations</a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <button className="uppercase px-2 border rounded-md bg-white text-black hover:bg-stone-800 hover:text-white hover:border-none duration-200">
            Take the next step
          </button>
          <button className="px-4 text-white hover:text-indigo-50">
            Sign In
          </button>
        </div>

        {/* Responsive Menu Icon*/}
        <div className="lg:hidden mr-12" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-4 text-white" />
          ) : (
            <XIcon className="w-4 text-white" />
          )}
        </div>
      </div>

      {/* Responsive Menu */}
      <div className="">
        <ul
          className={
            !nav
              ? "hidden"
              : // : "absolute w-full bg-stone-800 text-white  hover:text-indigo-50 lg:hidden"
                "absolute bg-stone-800 w-full px-8"
          }
        >
          {/* Look at implementing border-b-2 ease in from middle out */}
          <li
            className="w-full uppercase text-l px-16 py-2 text-white hover:text-indigo-50"
            onClick={handleClick}
          >
            <a href="#">Amenities</a>
          </li>
          <li
            className="w-full uppercase text-l px-16 py-2 text-white file:hover:text-indigo-50"
            onClick={handleClick}
          >
            <a href="#">Classes</a>
          </li>
          <li
            className="w-full uppercase text-l px-16 py-2 text-white file:hover:text-indigo-50"
            onClick={handleClick}
          >
            <a href="#">Membership</a>
          </li>
          <li
            className="w-full uppercase text-l px-16 py-2 text-white file:hover:text-indigo-50"
            onClick={handleClick}
          >
            <a href="#">Booking</a>
          </li>
          <li
            className="w-full uppercase text-l px-16 py-2 text-white file:hover:text-indigo-50"
            onClick={handleClick}
          >
            <a href="#">Locations</a>
          </li>
          <div className="flex flex-col my-4">
            <button className="uppercase px-2 border rounded-md bg-white text-black hover:bg-stone-800 hover:text-white hover:border-none duration-200">
              Take the next step
            </button>
            <button className="px-4 text-white hover:text-indigo-50">
              Sign In
            </button>
          </div>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;

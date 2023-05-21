import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div
      className="w-screen w-full h-[80px] text-slate-200 py-2 md:py-8
       px-2 md:px-6 fixed top-0
       z-10 bg-[#2B7A0B]"
    >
      {/* <div className="px-2  flex  items-center  justify-between w-full h-full"> */}
      <div
        className="flex items-center justify-between px-2 md:px-10
      w-full h-full"
      >
        <div className="flex items-center space-x-2 w-[50%  ]">
          <div className="md:hidden  ml-4 text-white" onClick={handleNav}>
            {nav ? (
              <AiOutlineMenuFold size={24} />
            ) : (
              <AiOutlineClose size={24} />
            )}
          </div>
          <h1 className="text-3xl text-white font-bold  mr-4 sm:text-4xl md:ml-8">
            Dahabshiil{" "}
          </h1>
        </div>

        <div className="hidden md:flex  items-center ">
          <ul className="flex items-center">
            <li>About us</li>
            <li>Contact</li>
            <li>Help</li>
            <li>Countries</li>
          </ul>
        </div>

        <div className="flex items-center md:mr-10 ">
          <button
            className=" hidden md:flex px-4 bg-slate-300 mr-4 border
           border-gray-200 p-2  rounded-sm  hover:bg-gray-200 hoover:text-black"
          >
            Sign in
          </button>
          <button className="sm:mr-2 px-4 bg-black text-white  p-2 rounded-sm">
            Register
          </button>
        </div>
      </div>

      {/* </div> */}

      <ul
        className={
          nav
            ? "hidden"
            : "absolute  text-gray-700 px-8 md:hidden bg-[#fff]    w-full  left-0"
        }
      >
        <li>About us</li>
        <li>Contact</li>
        <li>Help</li>
        <li>Countries</li>
      </ul>
    </div>
  );
};

export default Navbar;

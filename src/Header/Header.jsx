import { useState } from "react";

function Header() {
  const [isdark,setIsdark] =useState(false)

  const buttonHandle=()=>{
setIsdark(!isdark)
  }
  return (

    <header className={"flex top-0 left-0 absolute z-50  w-full shadow-xl " + (isdark && "bg-gray-800 text-white")}>
      <div className=" h-20 w-full flex justify-between items-center">
        <div className=" flex ml-4 ">
          <img
            className="h-16 w-24 rounded-xl cursor-pointer"
            src="https://pbs.twimg.com/media/FyL1WnkXgAU3zPE.png"
            alt="logo"
          />
        </div>
        <div className="hidden md:flex space-x-4 items-center mr-7  ">
          <nav>
            <ul className=" flex space-x-4">
            
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="relative ">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-700  text-white placeholder-gray-400 rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button className="absolute right-0 top-0 mt-2 mr-2 text-gray-400 hover:text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m1.4-2.1a7.5 7.5 0 10-1.4 1.4l4.35 4.35z"
                ></path>
              </svg>
            </button>
            
          </div>
          <button className="bg-red-400 h-9 w-24 rounded-xl " onClick={(buttonHandle)}>Dark-Mode</button>
        </div>
      </div>
      
    </header>
  );
}

export default Header;

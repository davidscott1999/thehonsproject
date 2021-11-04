import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-gray-200 text-black text-lg
    relative shadow-sm font-family: ui-serif"
      role="navigation"
    >
      <Link className="pl-4 hover:text-gray-900" to="/home">
        Scottish Munro Bagging
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className="p-4 hover:text-gray-900" to="/munros">
          Munros
        </Link>
        <Link className="p-4 hover:text-gray-900" to="/logs">
          My Logs
        </Link>
        <Link className="p-4 hover:text-gray-900" to="/safety">
          Mountain Safety
        </Link>
        <Link className="p-4 hover:text-gray-900" to="/account">
          Account
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };

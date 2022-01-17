import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className="flex justify-between items-center h-21 bg-white text-black text-lg
    relative shadow-sm font-family: ui-serif"
      role="navigation"
    >
      <div>
        <img alt="munroLogo" src="media/MunroLogo.PNG" />
      </div>
      <h1 className="pl-4 text-blue-900 text-2xl font-bold">Munro Baggers</h1>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
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
        <Link className="p-4 hover:text-gray-900" to="/">
          Home
        </Link>
        <Link className="p-4 hover:text-gray-900" to="/munros">
          Munros
        </Link>
        <Link className="p-4 hover:text-gray-900" to="/logs">
          My Logs
        </Link>
        <Link className="p-4 hover:text-gray-900" to="/safety">
          Mountain Safety
        </Link>
        <Link className="p-4 hover:text-gray-900" to="/login">
          Account
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

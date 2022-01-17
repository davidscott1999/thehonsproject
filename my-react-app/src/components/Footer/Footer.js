import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="flex flex-col static bottom-0">
    <div className="w-full bg-gray-500 text-white object-bottom">
      <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-5">
        <div className="w-full pt-10 flex flex-col sm:flex-row space-y-2 justify-start">
          <div className="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
            <img
              className="object-scale-down h-32 w-70 object-left-top"
              src="media/cardImage_1.jpg"
              alt="Munro Logo"
            />
            <p className="opacity-60">Eat. Sleep. Bag Munros. Repeat</p>
          </div>
          <div className="w-full sm:w-1/5 flex flex-col space-y-4">
            <ul>
              <li className="opacity-60">
                <a href="/">App</a>
              </li>
              <li className="opacity-60">
                <a href="/cookie-policy">Cookie Policy</a>
              </li>
              <li className="opacity-60">
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/5 flex flex-col space-y-4">
            <ul>
              <li className="opacity-60">
                <Link to="/account">Account</Link>
              </li>
              <li className="opacity-60">
                <a href="https://www.walkhighlands.co.uk/">Walk Highlands</a>
              </li>
              <li className="opacity-60">
                <a href="/faqs">FAQ's</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="opacity-60 pt-2">
          <p>Copyright © 2021 - Scottish Munro Bagging</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

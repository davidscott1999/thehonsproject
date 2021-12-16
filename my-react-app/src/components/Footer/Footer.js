import React from 'react';

const Footer = () => (
  <footer className="flex justify-between">
    <div class="w-full bg-purple-500 text-white object-bottom">
      <div class="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-5">
        <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
          <div class="w-full sm:w-2/5 pr-6 flex flex-col space-y-4">
            <img
              className="object-scale-down h-48 w-96 object-left-top"
              src="media/MunroLogo.PNG"
              alt="Munro Logo"
            />
            <p class="opacity-60">Eat. Sleep. Bag Munros. Repeat</p>
          </div>
          <div className="w-full sm:w-1/5 flex flex-col space-y-4">
            <ul>
              <li className="opacity-60">
                <a href="/contact-us">Contact us</a>
              </li>
              <li className="opacity-60">
                <a href="/cookie-policy">Cookie Policy</a>
              </li>
              <li className="opacity-60">
                <a href="/account">My Account</a>
              </li>
              <li className="opacity-60">
                <a href="/what3words">what3words</a>
              </li>
            </ul>
          </div>
          <div class="w-full sm:w-1/5 flex flex-col space-y-4">
            <ul>
              <li className="opacity-60">
                <a href="/contact-us">My Logs</a>
              </li>
              <li className="opacity-60">
                <a href="/cookie-policy">Munro Safety</a>
              </li>
              <li className="opacity-60">
                <a href="/account">FAQ's</a>
              </li>
              <li className="opacity-60">
                <a href="/what3words">Community Forum</a>
              </li>
            </ul>
          </div>
          <div class="w-full sm:w-1/5 pt-6 flex items-end mb-1">
            <div class="flex flex-row space-x-4">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-google"></i>
            </div>
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

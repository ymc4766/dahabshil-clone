import React from "react";

function Footer() {
  // Eng YUSUF YMC CLONING DAHABSHIIL Wep App

  return (
    <footer className="bg-gray-800 py-10 px-5 lg:px-10 xl:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center mb-4 lg:mb-0">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src="https://prod-refactor-cms.dahabshiil.com/wp-content/uploads/2022/01/dahabshiil-portal-logo-white1.svg"
            alt="Company logo"
          />
        
        </div>
        <div className="flex items-center">
          <nav className="text-white font-medium text-sm lg:text-base">
            <ul className="flex flex-col lg:flex-row">
              <li className="mr-4 lg:mr-8">
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mr-4 lg:mr-8">
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li className="mr-4 lg:mr-8">
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
        </div>
        <div className="flex items-center">
          <p className="text-white font-medium text-sm lg:text-base mr-4">
            &copy; 2023 Money Transfer Agency. All Rights Reserved.
          </p>
          <div className="flex">
            <a
              href="#"
              className="text-gray-400 hover:text-white mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white mr-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

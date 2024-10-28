"use client";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white py-2 md:py-4 rounded relative">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <a href="#" className="font-bold text-xl text-indigo-600">
            Next Move
          </a>
          <button
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
          </button>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
          id="navbar-collapse"
        >
          <a
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-white font-semibold rounded"
            style={{ backgroundColor: "#1ad1ff" }}
          >
            Home
          </a>
          <a
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-white shadow-lg p-5 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button className="text-gray-600 text-2xl mb-4" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <nav className="flex flex-col space-y-4">
          <a
            href="#"
            className="text-indigo-600 font-semibold"
            onClick={toggleSidebar}
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            onClick={toggleSidebar}
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            onClick={toggleSidebar}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Header;

"use client";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import appLogo from "../../public/ak-logo-1.png";
import Image from "next/image";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full bg-[#f5f6fa] py-2 md:rounded-b-lg shadow-lg z-50"
      style={{ height: "3.5rem" }}
    >
      <div className="flex md:mr-2">
        <div
          className="flex justify-between items-center"
          style={{ cursor: "pointer" }}
        >
          <a href="/">
            <Image
              src={appLogo}
              alt="app-logo"
              className="h-[2rem]"
              width={300}
            />
          </a>

          <button
            className="border border-solid border-gray-600 px-3 py-1 ml-5 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
          </button>
        </div>

        <div
          className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 ml-auto"
          id="navbar-collapse"
        >
          <a
            href="/"
            className={`p-2 lg:px-4 md:mx-2 font-semibold rounded ${
              pathname === "/"
                ? "bg-[#407bfe] text-white"
                : "text-gray-600 hover:bg-gray-200 hover:text-gray-700"
            } transition-colors duration-300`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`p-2 lg:px-4 md:mx-2 font-semibold rounded ${
              pathname === "/about"
                ? "bg-[#407bfe] text-white"
                : "text-gray-600 hover:bg-gray-200 hover:text-gray-700"
            } transition-colors duration-300`}
          >
            About
          </a>
          <a
            href="/contact"
            className={`p-2 lg:px-4 md:mx-2 font-semibold rounded ${
              pathname === "/contact"
                ? "bg-[#407bfe] text-white"
                : "text-gray-600 hover:bg-gray-200 hover:text-gray-700"
            } transition-colors duration-300`}
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
            href="/"
            className={`font-semibold ${
              pathname === "/"
                ? "text-indigo-600"
                : "text-gray-600 hover:text-indigo-600"
            } transition-colors duration-300`}
            onClick={toggleSidebar}
          >
            Home
          </a>
          <a
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-indigo-600"
                : "text-gray-600 hover:text-indigo-600"
            } transition-colors duration-300`}
            onClick={toggleSidebar}
          >
            About
          </a>
          <a
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "text-indigo-600"
                : "text-gray-600 hover:text-indigo-600"
            } transition-colors duration-300`}
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

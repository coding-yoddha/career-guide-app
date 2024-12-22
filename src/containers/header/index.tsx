"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHouse,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import appLogo from "@/public/logo1.png";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white py-2 shadow-lg z-50 border-t-2">
      {/* Header Content */}
      <div className="flex items-center justify-between px-4 md:px-6">
        {/* Logo and Title */}
        <a className="flex items-center gap-2" href="/">
          <Image
            src={appLogo}
            alt="Logo"
            className="w-8 h-8 md:w-10 md:h-10"
            priority
          />
          <h1
            className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#407bfe] to-[#5ca8ff] text-transparent bg-clip-text tracking-tight whitespace-nowrap"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Agla Kadam
          </h1>
        </a>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden text-[#407bfe] text-2xl"
          onClick={toggleSidebar}
          aria-label="Open Sidebar"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`font-semibold px-4 py-2 rounded transition-colors duration-300 ${
                pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                  ? "bg-[#407bfe] text-white"
                  : "text-gray-600 hover:bg-gray-200 hover:text-gray-700"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-[#407bfe] text-3xl"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex flex-col space-y-4 pl-6 pr-4">
          {[
            { name: "Home", icon: faHouse, path: "/" },
            { name: "About", icon: faUser, path: "/about" },
            { name: "Contact", icon: faEnvelope, path: "/contact" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.path}
              className={`flex items-center gap-4 py-3 px-4 rounded-lg text-lg font-semibold transition-all duration-300 ${
                pathname === item.path
                  ? "text-white bg-gradient-to-r from-[#407bfe] to-[#5ca8ff]"
                  : "text-gray-700 hover:text-[#407bfe] hover:bg-gray-100"
              }`}
              onClick={toggleSidebar}
            >
              {/* FontAwesome Icon */}
              <span className="text-2xl text-[#407bfe]">
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`${
                    pathname === item.path ? "text-white" : "text-[#407bfe]"
                  }`}
                />
              </span>

              {/* Navigation Text */}
              {item.name}
            </a>
          ))}
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

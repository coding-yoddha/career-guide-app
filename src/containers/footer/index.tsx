const Footer = () => {
  return (
    <div className="bg-gray-900 py-12 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container for the footer content */}
        <div className="flex flex-col sm:flex-row sm:justify-between space-y-8 sm:space-y-0">
          {/* First Section: Agla Kadam */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h4 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-pink-500 after:h-1 after:w-10 sm:after:w-16">
              Agla Kadam
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
              <li>
                <a
                  href="/about"
                  className="hover:text-pink-400 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">➤</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-pink-400 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">➤</span> Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Second Section: Contact Us */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h4 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-pink-500 after:h-1 after:w-10 sm:after:w-16">
              Contact Us
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
              <li>
                <a
                  href="mailto:team.aglakadam@gmail.com"
                  className="hover:text-pink-400 transition-all duration-300 flex items-center"
                >
                  <span className="mr-2">✉️</span> team.aglakadam@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Optional Third Section for Future Use (e.g., Social Links, Policies, etc.) */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            {/* Placeholder for additional content */}
          </div>
        </div>

        {/* Footer Bottom: Copyright Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs sm:text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Agla Kadam. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

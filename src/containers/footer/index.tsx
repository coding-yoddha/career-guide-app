const Footer = () => {
  return (
    <div className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="text-white text-lg font-medium mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-pink-500 after:h-0.5 after:w-12">
              Agla Kadam
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-all ease-in-out duration-300"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all ease-in-out duration-300"
                >
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h4 className="text-white text-lg font-medium mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-pink-500 after:h-0.5 after:w-12">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-all ease-in-out duration-300"
                >
                  Email: team.aglakadam@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

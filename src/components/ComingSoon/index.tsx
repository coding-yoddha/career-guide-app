import Image from "next/image";
import workingIllustration from "../../public/working.svg";

const ComingSoonPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-6">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="w-64 sm:w-80">
          <Image
            src={workingIllustration}
            alt="Working on it"
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Exciting Updates Coming Soon!
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
          We’re working hard to bring you the best way to explore this career
          option. Stay tuned! Very soon, you’ll have access to all the details
          you need to make informed choices about your future.
        </p>
      </div>

      {/* Message Box */}
      <div className="mt-12 bg-white shadow-lg rounded-lg p-6 sm:p-8 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Wait?</h2>
        <p className="text-gray-600 text-lg mb-6">
          While we’re perfecting this career path, why not explore other options
          that might interest you? Take a look and discover your potential!
        </p>
        <a href="/">
          <a className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg hover:bg-blue-700 transition">
            Explore Other Careers
          </a>
        </a>
      </div>
    </div>
  );
};

export default ComingSoonPage;

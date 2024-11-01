import Image from "next/image";
import mailIcon from "../../public/mail.png";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-blue-600">
        Contact Us
      </h2>
      <div className="flex justify-center items-center">
        <div className="pr-36">
          <Image src={mailIcon} height={400} width={300} alt="mail-icon" />
        </div>
        <div className="max-w-2xl">
          <p className="mt-2 text-center text-gray-600">
            We're here to help! Fill out the form below to reach us.
          </p>

          <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
            <form>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-lg font-bold text-blue-600">Get in Touch</h3>
            <p className="text-gray-600">Email: support@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

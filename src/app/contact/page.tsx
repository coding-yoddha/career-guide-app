import Image from "next/image";
import mailIcon from "../../public/mail.png";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8 w-full">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Contact Us
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center mt-8 lg:space-x-8">
        {/* Mail Icon */}
        <div className="mb-8 lg:mb-0 flex justify-center lg:pr-8">
          <Image
            src={mailIcon}
            height={300}
            width={250}
            alt="mail-icon"
            className="w-3/4 sm:w-1/2 lg:w-auto"
          />
        </div>

        <div className="max-w-lg w-full">
          {/* General Information Section */}
          <p className="text-lg text-center lg:text-left text-gray-600 mb-4">
            We're committed to providing you with the most accurate information.
            However, we are human, and mistakes may happen. If you spot any
            discrepancies or if something doesn't seem right, feel free to
            contact us with your corrections or suggestions. We value your
            input!
          </p>

          <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              If you have any suggestions or questions, please feel free to
              reach out:
            </h3>
            <div className="text-center lg:text-left">
              <p className="text-gray-600">
                Email:{" "}
                <span className="text-blue-600">team.aglakadam@gmail.com</span>
              </p>
            </div>
          </div>

          {/* New Suggestion Section */}
          <div className="mt-8 bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              We’re Always Improving!
            </h3>
            <p className="text-gray-700 text-center">
              If you believe there's an additional field we could include or if
              there's a career path you'd like to see that isn't currently
              listed, please feel free to reach out. We value your input and
              will make every effort to incorporate it as quickly as possible.
            </p>
          </div>

          {/* Subtle Note */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              Your feedback is important to us. We're continuously working to
              improve, and your suggestions will help us serve you better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

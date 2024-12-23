import Image from "next/image";
import DataCard from "@/components/DataCard";
import NotificationCard from "@/components/NotificationCard";
import mainIcon from "../public/mainLogo.svg";
import learning from "../public/learning.jpg";
import { getCareers } from "../actions/careerOverviewAction";

// Define the type for the career option object
interface CareerOption {
  _id: string;
  name: string;
  description: string;
  redirectPageName: string;
  image?: {
    data: string; // Base64 encoded string
    contentType: string;
  };
}

interface CareersResponse {
  data?: CareerOption[] | null;
  errMsg?: string;
}

const Home: React.FC = async () => {
  const { data, errMsg }: CareersResponse = await getCareers();

  if (errMsg) {
    return (
      <div className="p-3 w-full" style={{ marginTop: "7%" }}>
        <p className="text-red-500">Error fetching careers: {errMsg}</p>
      </div>
    );
  }

  return (
    <div className="p-3 w-full" style={{ marginTop: "1%" }}>
      <div className="flex flex-col  items-center">
        <div className="flex flex-col md:flex-row md:justify-start items-center w-full space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-64 h-40 sm:w-72 sm:h-48 md:w-96 md:h-64 lg:w-[650px] lg:h-[400px]">
            <Image alt="Logo" src={mainIcon} />
          </div>
          <div className="text-center px-4 md:text-left">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal"
              style={{ color: "#1f2937", letterSpacing: "-0.02em" }}
            >
              Your next step - Your {""}
              <span className="font-extrabold text-[#407bfe]">Agla Kadam</span>
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 mt-1 max-w-sm sm:max-w-md md:max-w-lg font-medium"
              style={{ color: "#4b5563" }}
            >
              Welcome to your journey! Explore options, find your passions, and
              take the first step toward following your dreams. Your future
              starts here!
            </p>
          </div>
        </div>
        <section className="pt-8 px-4 sm:px-8 md:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col flex-1 mb-8 md:mb-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Your Roadmap to a Bright Future
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Feeling confused about what to do after 10th class? Don’t
                worry—we’re here to help! This website is designed to guide
                students like you in exploring the best career options available
                after 10th class. Whether you dream of becoming an engineer,
                doctor, artist, lawyer, or anything else, we’ll show you the
                different paths you can take to achieve your goals.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Learn which subjects to choose, what courses to take, and how to
                plan your journey step by step. From science, commerce, and arts
                to unique career fields, discover all the opportunities waiting
                for you. With clear guidance and valuable resources, we’ll help
                you make confident decisions about your future.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Start your journey today and explore the possibilities for a
                successful and fulfilling career after 10th class!
              </p>
            </div>
            <Image
              src={learning}
              alt="learning"
              className="w-full md:w-[25rem] max-w-xs"
            />
          </div>
        </section>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md mb-6 w-full sm:w-auto text-center mt-4">
          <p className="text-sm sm:text-base">
            <strong>Note:</strong> For the best experience, we recommend using
            this app in
            <span className="font-semibold"> desktop mode</span>.
          </p>
        </div>
        <div className="self-start">
          <NotificationCard
            title={" Exciting Updates Coming Soon!"}
            description={
              "We currently have few career choices available as of now. Stay tuned for more options that will be added in the future!"
            }
          />
        </div>

        <div className="bg-zinc-50 rounded border-2 border-gray-500 pt-4 pb-4 flex flex-wrap gap-4 mb-3 justify-around mt-6 w-full">
          {data?.map((careerOption: CareerOption) => (
            <DataCard careerOption={careerOption} key={careerOption._id} />
          ))}
        </div>

        <div className="mt-4 mb-2 mx-auto w-[90%] sm:w-[40%] bg-gradient-to-r from-[#6a4c93] to-[#9b69e9] p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-white mb-4 text-center">
            We’re Always Improving!
          </h3>
          <p className="text-white text-center mb-4">
            If you believe there's an additional field we could include or if
            there's a career path you'd like to see that isn't currently listed,
            please feel free to reach out. We value your input and will make
            every effort to incorporate it as quickly as possible.
          </p>
          <div className="text-center">
            <a
              href="/contact"
              className="px-4 py-2 font-semibold rounded-lg shadow-md bg-white text-black transition duration-300 transform hover:scale-105  hover:shadow-lg cursor-pointer"
            >
              Drop your thoughts ❤️
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

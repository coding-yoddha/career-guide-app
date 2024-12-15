import Image from "next/image";
import Footer from "@/containers/footer";
import DataCard from "@/components/DataCard";
import NotificationCard from "@/components/NotificationCard";
import mainIcon from "../public/mainLogo.svg";
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
    <div className="p-3 w-full" style={{ marginTop: "7%" }}>
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
              <span className="font-extrabold">Agla Kadam</span>
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 mt-3 max-w-sm sm:max-w-md md:max-w-lg font-medium"
              style={{ color: "#4b5563" }}
            >
              Welcome to your journey! Explore options, find your passions, and
              take the first step toward following your dreams. Your future
              starts here!
            </p>
          </div>
        </div>
        <section className="p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Your Roadmap to a Bright Future
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Feeling confused about what to do after 10th class? Don’t
            worry—we’re here to help! This website is designed to guide students
            like you in exploring the best career options available after 10th
            class. Whether you dream of becoming an engineer, doctor, artist,
            lawyer, or anything else, we’ll show you the different paths you can
            take to achieve your goals.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Learn which subjects to choose, what courses to take, and how to
            plan your journey step by step. From science, commerce, and arts to
            unique career fields, discover all the opportunities waiting for
            you. With clear guidance and valuable resources, we’ll help you make
            confident decisions about your future.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Start your journey today and explore the possibilities for a
            successful and fulfilling career after 10th class!
          </p>
        </section>

        <NotificationCard
          title={" Exciting Updates Coming Soon!"}
          description={
            "We currently have few career choices available as of now. Stay tuned for more options that will be added in the future!"
          }
        />
        <div className="bg-zinc-50 rounded border-2 border-gray-500 p-4 flex flex-wrap gap-y-4 mb-3 justify-around mt-6">
          {data?.map((careerOption: CareerOption) => (
            <DataCard careerOption={careerOption} key={careerOption._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

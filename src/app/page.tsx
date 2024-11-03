import Image from "next/image";
import Footer from "@/containers/footer";
import DataCard from "@/components/DataCard";
import mainIcon from "../public/main-logo-1.png";
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

// The Home component is an async function returning JSX
const Home: React.FC = async () => {
  const { data, errMsg }: CareersResponse = await getCareers();

  if (errMsg) {
    return (
      <div className="p-3 w-full" style={{ marginTop: "5%" }}>
        <p className="text-red-500">Error fetching careers: {errMsg}</p>
      </div>
    );
  }

  return (
    <div className="p-3 w-full" style={{ marginTop: "5%" }}>
      <div className="flex flex-col">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div>
            <Image
              alt="Logo"
              src={mainIcon}
              className="w-40 sm:w-60 md:w-80 lg:w-96"
            />
          </div>
        </div>
        <div className="bg-zinc-5 rounded border-2 border-gray-500 p-4 flex flex-wrap gap-x-7 gap-y-4 mb-3 justify-items-start">
          {data?.map((careerOption: CareerOption) => {
            return (
              <DataCard careerOption={careerOption} key={careerOption._id} />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

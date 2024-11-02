import Image from "next/image";
import Footer from "@/containers/footer";
import DataCard from "@/components/DataCard";
import mainIcon from "../public/main-logo-1.png";
import { getCareers } from "../actions/careerOverviewAction";

const Home = async () => {
  const { data, errMsg } = await getCareers();
  return (
    <div className="p-3">
      <div className="flex flex-col" style={{ marginTop: "72px" }}>
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
        <div className="bg-zinc-5 rounded border-2 border-gray-500  p-4 flex flex-wrap gap-x-7 gap-y-4 mb-3 justify-items-start">
          {data?.map((careerOption) => {
            return (
              <DataCard careerOption={careerOption} key={careerOption.id} />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

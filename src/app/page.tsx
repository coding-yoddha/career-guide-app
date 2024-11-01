import Image from "next/image";
import Footer from "@/containers/footer";
import DataCard from "@/components/DataCard";
import mainIcon from "../public/home-page-icon.png";
import { getCareers } from "../actions/careerOverviewAction";

const Home = async () => {
  const { data, errMsg } = await getCareers();
  return (
    <div
      className="p-3"
      style={{
        background:
          "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(220,245,255,1) 0%, rgba(255,255,255,1) 38%, rgba(254,254,254,1) 100%)",
      }}
    >
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

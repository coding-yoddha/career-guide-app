"use client";
import Image from "next/image";
// import Header from "@/containers/header";
import Footer from "@/containers/footer";
import DataCard from "@/components/DataCard";
import mainIcon from "../public/home-page-icon.png";
import engineeringIcon from "../public/developer.png";
import medicalIcon from "../public/medical.png";
import lawIcon from "../public/law.png";
import armyIcon from "../public/soldier.png";
import navyIcon from "../public/marine.png";
import airForceIcon from "../public/airforce.png";
import bankIcon from "../public/bank.png";
import civilServicesIcon from "../public/national-emblem.png";

const careerOptions = [
  {
    id: 1,
    name: "Engineering",
    image: engineeringIcon,
    description:
      "Engineering applies science and math to design and build solutions that improve life, from structures and machines to technology and medical devices.",
    redirectPageName: "engineering",
  },
  {
    id: 2,
    name: "Medicine",
    image: medicalIcon,
    description:
      "Medicine is the science and practice of diagnosing, treating, and preventing illness to help people stay healthy. It includes everything from using drugs and surgeries to lifestyle advice and therapies to improve health and well-being.",
    redirectPageName: "medicine",
  },
  {
    id: 3,
    name: "Law",
    image: lawIcon,
    description:
      "Law is a set of rules created by society to maintain order, protect people’s rights, and define what is right and wrong. It helps resolve conflicts, ensures justice, and keeps communities safe by outlining consequences for breaking these rules.",
    redirectPageName: "law",
  },
  {
    id: 4,
    name: "Army",
    image: armyIcon,
    description:
      "NDA stands for National Defence Academy, which is a prestigious military training institution in India. It trains future leaders of the Indian Army, Navy, and Air Force.",
    redirectPageName: "army",
  },
  {
    id: 5,
    name: "Navy",
    image: navyIcon,
    description:
      "NDA stands for National Defence Academy, which is a prestigious military training institution in India. It trains future leaders of the Indian Army, Navy, and Air Force.",
    redirectPageName: "navy",
  },
  {
    id: 6,
    name: "Air Force",
    image: airForceIcon,
    description:
      "NDA stands for National Defence Academy, which is a prestigious military training institution in India. It trains future leaders of the Indian Army, Navy, and Air Force",
    redirectPageName: "airforce",
  },
  {
    id: 7,
    name: "Civil Services",
    image: civilServicesIcon,
    description:
      "Civil services refer to a group of government jobs in which employees work to implement government policies and serve the public. Civil servants handle various administrative tasks, manage public services, and ensure that laws and regulations are followed.",
    redirectPageName: "civil-services",
  },
  {
    id: 8,
    name: "Banking",
    image: bankIcon,
    description:
      "Banking is the process of managing money through financial institutions called banks. Banks accept deposits from people, provide loans, and offer services like savings accounts, checking accounts, and investment options.",
    redirectPageName: "banking",
  },
];

const Home = () => {
  return (
    <div
      className="p-3"
      style={{
        background:
          "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(220,245,255,1) 0%, rgba(255,255,255,1) 38%, rgba(254,254,254,1) 100%)",
      }}
    >
      {/* <Header /> */}
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
          {careerOptions?.map((careerOption) => {
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

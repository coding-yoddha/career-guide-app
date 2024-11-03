"use server";

import connectDB from "../../config/database";
import CareerOverview from "@/models/careerOverview";
import engineeringIcon from "../public/developer.png";

const careerOptions = [
  {
    id: 1,
    name: "Engineering",
    image: engineeringIcon,
    description:
      "Engineering applies science and math to design and build solutions that improve life, from structures and machines to technology and medical devices.",
    redirectPageName: "engineer-options",
  },
  {
    id: 2,
    name: "Medicine",
    image: engineeringIcon,
    description:
      "Medicine is the science and practice of diagnosing, treating, and preventing illness to help people stay healthy. It includes everything from using drugs and surgeries to lifestyle advice and therapies to improve health and well-being.",
    redirectPageName: "medicine-options",
  },
  {
    id: 3,
    name: "Law",
    image: engineeringIcon,
    description:
      "Law is a set of rules created by society to maintain order, protect people’s rights, and define what is right and wrong. It helps resolve conflicts, ensures justice, and keeps communities safe by outlining consequences for breaking these rules.",
    redirectPageName: "law",
  },
  {
    id: 4,
    name: "Army",
    image: engineeringIcon,
    description:
      "NDA stands for National Defence Academy, which is a prestigious military training institution in India. It trains future leaders of the Indian Army, Navy, and Air Force.",
    redirectPageName: "army",
  },
  {
    id: 5,
    name: "Navy",
    image: engineeringIcon,
    description:
      "NDA stands for National Defence Academy, which is a prestigious military training institution in India. It trains future leaders of the Indian Army, Navy, and Air Force.",
    redirectPageName: "navy",
  },
  {
    id: 6,
    name: "Air Force",
    image: engineeringIcon,
    description:
      "NDA stands for National Defence Academy, which is a prestigious military training institution in India. It trains future leaders of the Indian Army, Navy, and Air Force",
    redirectPageName: "airforce",
  },
  {
    id: 7,
    name: "Civil Services",
    image: engineeringIcon,
    description:
      "Civil services refer to a group of government jobs in which employees work to implement government policies and serve the public. Civil servants handle various administrative tasks, manage public services, and ensure that laws and regulations are followed.",
    redirectPageName: "civil-services",
  },
  {
    id: 8,
    name: "Banking",
    image: engineeringIcon,
    description:
      "Banking is the process of managing money through financial institutions called banks. Banks accept deposits from people, provide loans, and offer services like savings accounts, checking accounts, and investment options.",
    redirectPageName: "banking",
  },
];

export async function getCareers() {
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await CareerOverview.find()));
    return { data };
  } catch (error) {
    return { errMsg: error.message };
  }
}

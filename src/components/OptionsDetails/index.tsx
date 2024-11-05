"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

// Defining a type for card data
interface Card {
  _id: number;
  choice: string;
  description: string;
  dailyLifeExample: string;
  urlParam: string;
}

// Defining a type for the data structure returned by the API
interface OptionsData {
  cards: Card[];
}
interface OptionsDetailsProps {
  career: string | null;
}

const OptionsDetails: React.FC<OptionsDetailsProps> = ({ career }) => {
  const router = useRouter();
  const [optionData, setOptionData] = useState<Card[]>();
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  useEffect(() => {
    console.log(
      "{url}/api/getOptions?option=${career}",
      `${url}/api/getOptions?option=${career}`
    );
    fetch(`${url}/api/getOptions?option=${career}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setOptionData(data?.data);
        console.log("data", data);
      });
  }, []);
  return (
    <div
      className="flex justify-start bg-gradient-to-b from-white to-blue-100 min-h-screen w-full"
      style={{ marginTop: "6%" }}
    >
      <div className="w-3/4 max-w-4xl space-y-6 ml-10 mb-4">
        <h1 className="text-3xl font-semibold text-blue-800 mb-8">
          Explore Your Options
        </h1>

        {optionData?.map((card) => (
          <div
            key={card._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {card.choice}
            </h2>
            <p className="text-gray-600 mb-4">{card.description}</p>

            <Button
              onClick={() => {
                router.push(
                  `/career-options/flow-chart?careerOption=${card.choice}`
                );
              }}
              className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Learn More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsDetails;

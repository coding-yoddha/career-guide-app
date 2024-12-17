"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface DataCardProps {
  careerOption: {
    _id: string;
    name: string;
    description: string;
    redirectPageName: string;
    image?: {
      data: string;
      contentType: string;
    };
  };
}

const DataCard: React.FC<DataCardProps> = ({ careerOption }) => {
  const router = useRouter();
  const [pageName, setPageName] = useState<string>("");
  const handleBtnClick = () => {
    router.push(`/career-options?careerName=${pageName}`);
  };

  useEffect(() => {
    if (careerOption?.redirectPageName) {
      setPageName(careerOption.redirectPageName);
    } else {
      setPageName("");
    }
  }, [careerOption?.redirectPageName]);

  return (
    <div className="w-full sm:w-[48%] md:w-[30.5%] lg:w-[18.5%] xl:w-[18.5%] p-4">
      <div className="perspective">
        {/* Card Container */}
        <div className="relative w-full h-[300px] transform-style transition-transform duration-700 hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 shadow-2xl rounded-lg backface-hidden flex flex-col items-center justify-center p-4 border border-gray-200">
            <div className="w-24 h-24 mb-4 rounded-lg overflow-hidden ">
              <Image
                src={`data:${careerOption.image?.contentType};base64,${careerOption.image?.data}`}
                alt={careerOption.name}
                priority={true}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 tracking-wide mb-1">
              {careerOption.name}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              Discover what this career has to offer!
            </p>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 bg-gray-100 shadow-lg rounded-lg backface-hidden rotate-y-180 flex flex-col justify-center items-center p-4">
            <h4 className="text-lg font-bold text-[#407bfe] mb-2">
              {careerOption.name}
            </h4>
            <p className="text-gray-600 text-sm text-center overflow-hidden">
              {careerOption.description.length > 120
                ? careerOption.description.slice(0, 120) + "..."
                : careerOption.description}
            </p>
            <div className="mt-4">
              <Button
                onClick={handleBtnClick}
                className="bg-[#407bfe] text-white"
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;

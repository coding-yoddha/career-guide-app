"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
    <div className="w-[80%] sm:w-[48%] md:w-[30.5%] lg:w-[22%] xl:w-[20%] p-4">
      <div className="group relative perspective">
        {/* Card Container */}
        <div className="relative w-full h-[280px] transform-style transition-transform duration-500 group-hover:rotate-y-180 group-hover:scale-105">
          {/* Front Face */}
          <div className="absolute inset-0 shadow-xl rounded-xl backface-hidden flex flex-col items-center justify-between p-4 bg-gradient-to-b from-[#1a1a40] via-[#1f1f5a] to-[#24245c] border border-[#2e2e7d] group-hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.6)]">
            {/* Image Section */}
            <div className="w-36 h-36 mb-2 rounded-full bg-gradient-to-r from-[#4f4f8f] to-[#30305a] flex items-center justify-center shadow-lg">
              {careerOption.image ? (
                <Image
                  src={`data:${careerOption.image.contentType};base64,${careerOption.image.data}`}
                  alt={careerOption.name}
                  priority={true}
                  width={100}
                  height={100}
                  className="object-contain rounded"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm font-medium">
                  No Image
                </div>
              )}
            </div>
            {/* Content Section */}
            <div className="text-center">
              <h3 className="text-xl font-extrabold text-[#ffd700] tracking-wide mb-3 leading-tight drop-shadow-lg">
                {careerOption.name}
              </h3>
              <p className="text-sm text-gray-200">
                Discover what this career has to offer!
              </p>
            </div>
          </div>

          {/* Back Face */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#30305a] to-[#1a1a40] shadow-2xl rounded-xl backface-hidden rotate-y-180 flex flex-col justify-center items-center p-6">
            <h4 className="text-lg font-bold text-[#ffd700] mb-2">
              {careerOption.name}
            </h4>
            <p className="text-gray-300 text-sm text-center mb-4">
              {careerOption.description.length > 120
                ? careerOption.description.slice(0, 120) + "..."
                : careerOption.description}
            </p>
            <Button
              onClick={handleBtnClick}
              className="bg-[#ffd700] hover:bg-[#e6c200] text-black shadow-lg shadow-yellow-300/50 px-4 py-2 rounded-md"
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;

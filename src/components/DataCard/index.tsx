"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

// Define the type for the careerOption prop
interface DataCardProps {
  careerOption: {
    _id: string;
    name: string;
    description: string;
    redirectPageName: string;
    image?: {
      data: string; // Base64 encoded string
      contentType: string;
    };
  };
}

// interface DataCardProps {
//   careerOption: CareerOption;
// }

const DataCard: React.FC<DataCardProps> = ({ careerOption }) => {
  const router = useRouter();
  const [pageName, setPageName] = useState<string>("");
  const handleBtnClick = () => {
    // if (pageName) {
    //   router.push(`/${pageName}`);
    // }
    router.push(`/career-options?careerName=${careerOption.redirectPageName}`);
  };

  useEffect(() => {
    if (careerOption?.redirectPageName) {
      setPageName(careerOption.redirectPageName);
    } else {
      setPageName("");
    }
  }, [careerOption?.redirectPageName]);

  return (
    <div className="w-11/12 md:w-30 cursor-pointer">
      <Card style={{ height: "100%" }}>
        <CardContent>
          <CardTitle className="mb-3 mt-2">{careerOption.name}</CardTitle>
          <div className="flex justify-center">
            <Image
              src={`data:${careerOption.image?.contentType};base64,${careerOption.image?.data}`}
              alt={careerOption.name}
              priority={true}
              width={100}
              height={100}
            />
          </div>
          <CardDescription className="mt-3 h-20 max-h-28 overflow-scroll">
            {careerOption.description}
          </CardDescription>
          <div className="mt-2.5 flex justify-center">
            <Button onClick={handleBtnClick}>Know more</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCard;

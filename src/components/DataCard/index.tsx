"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const DataCard = ({ careerOption }) => {
  const router = useRouter();
  const [pageName, setPageName] = useState<string>("");
  const handleBtnClick = () => {
    if (pageName) {
      router.push(`/${pageName}`);
    }
  };
  useEffect(() => {
    if (careerOption?.redirectPageName) {
      setPageName(careerOption.redirectPageName);
    } else {
      setPageName("");
    }
  }, [careerOption?.redirectPageName]);
  return (
    <div
      style={{ cursor: "pointer", height: "330px" }}
      className="w-11/12 md:w-30"
    >
      <Card style={{ height: "100%" }}>
        <CardContent>
          <CardTitle className="mb-3 mt-2">{careerOption.name}</CardTitle>
          <div className="flex justify-center">
            <Image
              src={careerOption.image}
              alt="career-path-icon"
              priority={true}
              width={100}
              height={100}
            />
          </div>
          <CardDescription className="mt-3 h-28 max-h-28 overflow-scroll">
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

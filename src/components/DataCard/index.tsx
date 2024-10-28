"use client";

import Image from "next/image";
import careerPathIcon from "../../public/engineer.png";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const DataCard = () => {
  return (
    <div style={{ cursor: "pointer", height: "280px", width: "285px" }}>
      <Card style={{ height: "100%" }}>
        <CardContent>
          <CardTitle className="mb-3 mt-2">{"Engineering"}</CardTitle>
          <Image
            src={careerPathIcon}
            alt="career-path-icon"
            priority={true}
            width={40}
            height={40}
          />
          <CardDescription className="mt-3">
            {
              " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus sitaccusantium itaque temporibus atque id sunt tenetur nostrum. Consequatur,quisquam vero! Accusantium consequatur minus amet ratione veritatis nisideserunt nemo"
            }
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCard;

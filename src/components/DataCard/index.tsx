"use client";

import Image from "next/image";
import careerPathIcon from "../../public/engineer.png";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

const DataCard = ({name, description}) => {
  return (
    <div style={{ cursor: "pointer", height: "280px", width: "285px" }}>
      <Card style={{ height: "100%" }}>
        <CardContent>
          <CardTitle className="mb-3 mt-2">{name}</CardTitle>
          <Image
            src={careerPathIcon}
            alt="career-path-icon"
            priority={true}
            width={40}
            height={40}
          />
          <CardDescription className="mt-3">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCard;

"use server";

import connectDB from "../../config/database";
import CareerOverview from "@/models/careerOverview";
import engineeringIcon from "../public/developer.png";
import fs from "fs";

export async function getCareers() {
  try {
    await connectDB();

    // const imgData = fs.readFileSync("./src/public/law.png");
    //   const newImage = new CareerOverview({
    //     "name": "Law",
    //     "description": "Law is about understanding the rules that help guide society and working to bring justice and fairness to all.",
    //     "redirectPageName": "law",
    //     image: {
    //       data: imgData,
    //       contentType: "image/jpeg",
    //     },
    //   });
    //   await newImage.save();
    //   console.log("saved successfully");
    const careers = await CareerOverview.find().lean();

    // Ensure each field matches the defined interface and handle optional fields
    const formattedCareers = careers.map((career) => ({
      _id: career._id.toString(), // Convert _id to a string
      name: career.name,
      description: career.description,
      redirectPageName: career.redirectPageName,
      image: career.image
        ? {
            data: career.image.data.toString('base64'), // Convert Buffer to Base64 if present
            contentType: career.image.contentType,
          }
        : undefined, // If image is not present, set it as undefined
    }));
    console.log(formattedCareers);
    return { data: formattedCareers };
  } catch (error) {
    console.log("error: ", error);
    return { errMsg: error.message };
  }
}

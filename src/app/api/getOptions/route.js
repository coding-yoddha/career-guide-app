import connectToDB from "../../../../config/database";
import { NextResponse } from "next/server";
import CareerOption from "../../../models/careerOption";
import CareerOverview from "@/models/careerOverview";
export const dynamic = "force-dynamic"; // Ensure dynamic rendering

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const option = searchParams.get("option");
    const careerOverview = await CareerOverview.find({ redirectPageName: option });
    const careerOptions = await CareerOption.find({ career: option });
    const result = {
      description: careerOverview[0]?.description,
      options: careerOptions
    }
    if (careerOptions) {
      return NextResponse.json({
        success: true,
        data: result,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again later.",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}

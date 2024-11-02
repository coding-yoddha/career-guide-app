import connectToDB from "@/database";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const option = searchParams.get("option");
    const careerOptions = await CareerOptions.find({});

    if (careerOptions) {
      return NextResponse.json({
        success: true,
        data: careerOptions,
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

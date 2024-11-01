'use server'

import CareerOverview from "../models/careerOverview"
import connectDB from "../config/database"

export async function getCareers(){
  try {
    await connectDB();
    const data = JSON.parse(JSON.stringify(await CareerOverview.find()));
    console.log(data);

    return { data }
  } catch (error) {
    return { errMsg: error.message }
  }
}
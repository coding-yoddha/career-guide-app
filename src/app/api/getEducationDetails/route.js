import connectToDB from "../../../../config/database";
import { NextResponse } from "next/server";

import CourseDetail from "../../../models/courseDetail";
import EducationDetail from "../../../models/educationDetail";
import RoleToEducationMap from "../../../models/roleToEducationMap";

export async function GET(req) {
  try {
    await connectToDB();
    const data = {};
    const { searchParams } = new URL(req.url);
    const education = searchParams.get("education");
    const role = searchParams.get("role");
    const eduData = await EducationDetail.find({ name: education });
    if (eduData.length > 0) {
      data.name = eduData[0].name;
      data.description = eduData[0].description;
      data.otherOptions = eduData[0].otherOptions;
      const roleToeduMapData = await RoleToEducationMap.find({
        role,
        education,
      });
      data.courses = [];
      data.resources = [];
      var resources = [];
      if (roleToeduMapData.length > 0) {
        const courseIds = roleToeduMapData[0].courseIds;
        const courseData = await CourseDetail.find({ id: { $in: courseIds } }); 
        for (var course of courseData) {
          data.courses.push({
            name: course.name,
            description: course.description,
            exams: course.exams,
          });
          resources = resources.concat(course.resources);
        }
        for(var resource of resources){
          data.resources.push({
            name: resource.name,
            description: resource.description,
            url: resource.url,
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}

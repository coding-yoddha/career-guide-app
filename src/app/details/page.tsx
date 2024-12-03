"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchEducationDetails } from "@/utils/apiHelpers";
import Loader from "@/components/Loader";

interface Course {
  name: string;
  description: string;
  exams: string;
}

interface Resource {
  name: string;
  url: string;
}

interface EducationDetails {
  name: string;
  description: string;
  otherOptions: string;
  courses: Course[];
  resources: Resource[];
}

const DataDisplay: React.FC = () => {
  const searchParams = useSearchParams();
  const education = searchParams.get("careerPath");
  const role = searchParams.get("careerOption");

  const { data, isError, isLoading } = useQuery<EducationDetails>({
    queryKey: ["getEducationDetails", role, education],
    queryFn: async () => {
      const res = await fetchEducationDetails(
        role as string,
        education as string
      );
      return res?.data;
    },
    enabled: !!role && !!education,
  });

  if (isLoading) return <Loader />;

  if (isError || !data)
    return (
      <p className="text-red-500">
        Error fetching education details. Please try again.
      </p>
    );

  return (
    <div className="min-h-screen font-medium bg-gray-100 flex flex-col py-12 px-4">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-600 text-center mb-8">
        {data.name}
      </h1>

      {/* Container */}
      <div className="max-w-7xl w-full bg-white shadow-xl rounded-lg p-8">
        {/* Description Section */}
        <section className="mb-12">
          {/* <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Description
          </h2> */}
          <p className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-md border-l-4 border-gray-500">
            {data.description}
          </p>
        </section>

        {/* Separator */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Courses Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Courses</h2>
          <div className="space-y-6">
            {data.courses.map((course, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm transition"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {course.name}
                </h3>
                <p className="text-gray-600 mb-1 ">{course.description}</p>
                <p className="text-lg my-2">
                  <span className="font-extrabold text-gray-700">Exams:</span>{" "}
                  {course.exams}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Resources Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Resources
          </h2>
          <div className="space-y-4">
            {data.resources.map((resource, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 shadow-sm transition"
              >
                <span className="text-gray-800 font-medium">
                  {resource.name}
                </span>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Link
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Other Options Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Other Options
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            {data.otherOptions}
          </p>
        </section>
      </div>
    </div>
  );
};

export default DataDisplay;

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
    <div>
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        {data.name}
      </h1>
      <div className="max-w-4xl ml-4 my-8 p-6 shadow-lg rounded-lg mt-20">
        {/* Description Section */}
        <section className="mb-6">
          <p>{data.description}</p>
        </section>

        {/* Other Options Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Other Options
          </h2>
          <p>{data.otherOptions}</p>
        </section>

        {/* Separator */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Courses Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Courses</h2>
          {data.courses.map((course, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {course.name}
              </h3>
              <p>{course.description}</p>
              <p className="text-gray-500 mt-1">Exams: {course.exams}</p>
            </div>
          ))}
        </section>

        {/* Separator */}
        <div className="border-t border-gray-300 my-4"></div>

        {/* Resources Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Resources
          </h2>
          {data.resources.map((resource, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 p-4 border border-gray-300 rounded-lg"
            >
              <span className="text-gray-700">{resource.name}</span>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Link
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default DataDisplay;

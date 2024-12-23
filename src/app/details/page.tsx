"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useQuery } from "@tanstack/react-query";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchEducationDetails } from "@/utils/apiHelpers";
import Loader from "@/components/Loader";
import { BTech } from "@/constants";
import ComingSoonPage from "@/components/ComingSoon";

interface Course {
  name: string;
  description: string;
  exams: string;
}

interface Resource {
  name: string;
  url: string;
}

interface CommonResource {
  name: string;
  description: string;
  url: string;
}

interface Description {
  data: string;
}

interface EducationDetails {
  name: string;
  description: string;
  otherOptions: string[];
  courses: Course[];
  resources: Resource[];
  commonResources: CommonResource[];
  realLifeExamples: string[];
}

interface Description {
  data: string;
  customClass?: string; // Optional prop for custom styles
}

const DynamicDescription: React.FC<Description> = ({ data, customClass }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p
        className={`text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-md ${
          isExpanded ? "" : "sm:line-clamp-none line-clamp-4"
        } ${customClass ?? ""}`}
      >
        {data}
      </p>
      <button
        onClick={toggleExpanded}
        className="mt-2 text-blue-600 hover:text-blue-800 font-medium sm:hidden"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </>
  );
};

const DataDisplay: React.FC = () => {
  const searchParams = useSearchParams();
  const education = searchParams.get("careerPath");
  const role = searchParams.get("careerOption");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isError, isLoading } = useQuery<EducationDetails>({
    queryKey: ["getEducationDetails", role, education],
    queryFn: async () => {
      const res: any = await fetchEducationDetails(
        role as string,
        education as string
      );
      return res?.data;
    },
    enabled: !!role && !!education,
  });

  if (isLoading) return <Loader />;

  return (
    <>
      {data && Object.keys(data).length !== 0 ? (
        <div className="min-h-screen font-medium bg-gray-100 flex flex-col items-center py-12 px-4">
          {/* Title */}
          <h1 className="text-4xl font-extrabold text-gray-600 text-center mb-8">
            {data.name}
          </h1>
          {/* Container */}
          <div className="max-w-7xl w-full bg-white shadow-xl rounded-lg p-8">
            {/* Description Section */}
            <section className="mb-12">
              <DynamicDescription
                data={data.description}
                customClass="border-l-4 border-l-customBorder1"
              />
            </section>

            {/* Separator */}
            <div className="border-t border-gray-300 my-8"></div>

            {/* Examples Section */}

            {education && education === BTech ? (
              <>
                <section className="mb-12">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-4 p-2 sm:p-4 rounded-lg bg-gradient-to-r from-white to-blue-50 border border-gray-200 shadow-md">
                    The Engineers Behind Everyday Innovations
                  </h2>
                  <div className="space-y-4 pt-8">
                    {data?.realLifeExamples?.map((realLifeExample, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-4 border rounded-lg  hover:from-blue-100 hover:to-indigo-100 shadow-md transition-all duration-300 sm:w-2/4 w-[100%] border-l-4 border-l-customBorder2  transform hover:scale-105 hover:shadow-lg"
                      >
                        <span className="text-gray-800 font-semibold">
                          {realLifeExample}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
                {/* Separator */}
                <div className="border-t border-gray-300 my-8"></div>
              </>
            ) : null}

            {/* Courses Section */}
            {data?.courses && data?.courses?.length ? (
              <>
                <section className="mb-12">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-4 p-2 sm:p-4 rounded-lg bg-gradient-to-r from-white to-blue-50 border border-gray-200 shadow-md">
                    Courses
                  </h2>

                  <div className="space-y-6 pt-8 ">
                    {data.courses.map((course, index) => (
                      <div key={index}>
                        <h3 className="text-lg font-semibold text-white mb-4 inline-block bg-gray-800 shadow-md rounded-md px-5 py-2 border border-white">
                          {course.name}
                        </h3>

                        <DynamicDescription
                          data={course.description}
                          customClass="border-2 border-gray-800"
                        />

                        {!(
                          course.exams.length === 1 && course.exams === "."
                        ) && (
                          <div className="mt-4">
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">
                              Exams:
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {course.exams.split(",").map((exam, index) => (
                                <span
                                  key={index}
                                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                                >
                                  {exam.trim()}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
                <div className="border-t border-gray-300 my-8"></div>
              </>
            ) : null}

            {/* Resources Section */}
            {data?.resources && data?.resources?.length ? (
              <>
                <section className="mb-6">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-4 p-2 sm:p-4 rounded-lg bg-gradient-to-r from-white to-blue-50 border border-gray-200 shadow-md">
                    Resources
                  </h2>
                  <div className="space-y-4 pt-8 ">
                    {data.resources.map((resource, index) => (
                      <li
                        key={index}
                        className="flex justify-between items-center sm:w-[48%] w-[100%] p-4 border rounded-lg bg-gray-50/80  shadow-sm transition-all duration-300  border-l-4 border-l-customBorder1"
                      >
                        <span className="text-gray-800 font-semibold">
                          {resource.name}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition-colors duration-200"
                              >
                                view
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              Click here to open the resource in a new tab.
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </div>
                </section>
                {/* Separator */}
                <div className="border-t border-gray-300 my-8"></div>
              </>
            ) : null}

            {/* Common Resources */}
            {data?.commonResources && data?.commonResources?.length ? (
              <>
                <section className="mb-6">
                  <div className="flex flex-row items-center justify-start text-lg sm:text-xl font-bold text-gray-700 mb-4 p-2 sm:p-4 rounded-lg bg-gradient-to-r from-white to-blue-50 border border-gray-200 shadow-md">
                    <h2>Common Resources</h2>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <FontAwesomeIcon
                            className="ml-2"
                            icon={faInfoCircle}
                          />
                        </TooltipTrigger>
                        <TooltipContent className="w-64 h-32 p-4 bg-white text-black rounded shadow-lg font-normal">
                          <span>Common resources </span>are not designed for one
                          specific field. Instead, they offer content that can
                          be useful for any subject or area of study.
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <div className="flex flex-row flex-wrap gap-2 pt-8 ">
                    {data.commonResources.map((commonResource, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center sm:w-[48%] w-[100%] p-4 border rounded-lg bg-gray-50/80  shadow-sm transition-all duration-300  border-l-4 border-l-customBorder1"
                      >
                        <span className="text-gray-700 font-semibold">
                          {commonResource.name}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <a
                                href={commonResource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold transition-colors duration-200"
                              >
                                view
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              Click here to open the resource in a new tab.
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </section>
                {/* Separator */}
                <div className="border-t border-gray-300 my-8"></div>
              </>
            ) : null}

            {/* Other Options Section */}
            {data?.otherOptions && data?.otherOptions?.length && (
              <section className="mb-12">
                <h2 className="text-lg sm:text-xl font-bold text-gray-700 mb-4 p-2 sm:p-4 rounded-lg bg-gradient-to-r from-white to-blue-50 border border-gray-200 shadow-md">
                  Explore Alternative Pathways to Your Dream Career
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-md">
                  There’s no single route to achieving your dreams. Every career
                  offers multiple options to reach your goals, allowing you to
                  choose the path that aligns best with your interests and
                  aspirations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-md">
                  Explore the options below to discover your possibilities{" "}
                </p>
                <ul className="space-y-4 mt-3 pt-8 ">
                  {data.otherOptions.map((option, index) => (
                    <li
                      key={index}
                      className="flex items-center bg-white shadow-md rounded-lg p-4 hover:bg-gray-50 transition"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
                        {index + 1}
                      </div>
                      <p className="ml-4 text-gray-800 text-base leading-relaxed">
                        {option}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      ) : (
        <ComingSoonPage />
      )}
    </>
  );
};

export default DataDisplay;

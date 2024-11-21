"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchEducationDetails } from "@/utils/apiHelpers";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-gray-300 w-full">
    <button
      onClick={onClick}
      className="flex justify-between items-center w-full py-4 px-4 text-lg font-medium text-gray-700 hover:bg-gray-100 focus:outline-none"
    >
      <span>{title}</span>
      <span>{isOpen ? "▼" : "►"}</span>
    </button>
    {isOpen && (
      <div className="px-4 py-4 text-gray-600 bg-gray-50">{children}</div>
    )}
  </div>
);

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
      const res = await fetchEducationDetails(role as string, education as string);
      return res?.data;
    },
    enabled: !!role && !!education,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isLoading) return <p className="text-blue-500">Loading...</p>;

  if (isError || !data)
    return (
      <p className="text-red-500">
        Error fetching education details. Please try again.
      </p>
    );

  return (
    <div className="max-w-3xl ml-4 my-8 p-4 bg-white shadow-md rounded-lg mt-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{data.name}</h1>

      <Accordion
        title="Description"
        isOpen={openIndex === 0}
        onClick={() => toggleAccordion(0)}
      >
        <p>{data.description}</p>
      </Accordion>

      <Accordion
        title="Other Options"
        isOpen={openIndex === 1}
        onClick={() => toggleAccordion(1)}
      >
        <p>{data.otherOptions}</p>
      </Accordion>

      <Accordion
        title="Courses"
        isOpen={openIndex === 2}
        onClick={() => toggleAccordion(2)}
      >
        {data.courses.map((course, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {course.name}
            </h3>
            <p>{course.description}</p>
            <p className="text-gray-500 mt-1">Exams: {course.exams}</p>
          </div>
        ))}
      </Accordion>

      <Accordion
        title="Resources"
        isOpen={openIndex === 3}
        onClick={() => toggleAccordion(3)}
      >
        {data.resources.map((resource, index) => (
          <div key={index} className="mb-2">
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {resource.name}
            </a>
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default DataDisplay;

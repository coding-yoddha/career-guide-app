"use client";
import { fetchEducationDetails } from "@/utils/apiHelpers";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

// Define the types for the component props
interface Resource {
  resourceName: string;
  resourceLink: string;
}

interface DetailsProps {
  title: string;
  titleDescription: string;
  focusSubjects: string[];
  additionalInformation: string;
  resources: Resource[];
}

const Details: React.FC<DetailsProps> = () => {
  const searchParams = useSearchParams();
  const education = searchParams.get("careerPath");
  const role = searchParams.get("careerOption");

  const { isError, isLoading } = useQuery({
    queryKey: ["getEducationDetails"],
    queryFn: async () => {
      const res = await fetchEducationDetails(role, education);
      console.log("res?.data", res?.data);
      return res?.data;
    },
    enabled: !!role && !!education,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 text-gray-800 py-10">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        {/* Heading 1 Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">{"Title 1"}</h1>
          <p className="text-gray-600">{"lorem eps"}</p>
        </section>

        {/* Heading 2 Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Core Subjects
          </h2>
          {/* <ul className="list-disc list-inside text-gray-600 space-y-2">
            {focusSubjects?.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul> */}
        </section>

        {/* Heading 3 Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Additional Information
          </h3>
          <p className="text-gray-600">{"lorem epsum"}</p>
        </section>

        {/* Heading 4 Section */}
        <section className="bg-white shadow-lg rounded-lg p-8">
          <h4 className="text-2xl font-bold text-blue-700 mb-4">Heading 4</h4>
          <div className="space-y-2">
            {/* {resources?.map((resource, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">
                  {resource.resourceName}
                </span>
                <Link
                  href={resource.resourceLink}
                  className="text-blue-500 hover:underline"
                >
                  Visit Link
                </Link>
              </div>
            ))} */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Details;

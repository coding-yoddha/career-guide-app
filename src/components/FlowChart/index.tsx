"use client";

import { useState } from "react";
import { ReactFlow, Node, Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useRouter } from "next/navigation";
import { fetchFlowData } from "@/utils/apiHelpers";
import { useQuery } from "@tanstack/react-query";

// Define types for flow data
interface FlowData {
  nodes: Node[];
  edges: Edge[];
}

interface CareerOption {
  careerOption: string | null;
}

const Flow: React.FC<CareerOption> = ({ careerOption }) => {
  const [flowData, setFlowData] = useState<FlowData>({
    nodes: [],
    edges: [],
  });

  const router = useRouter();

  const { isError, isLoading } = useQuery({
    queryKey: ["getFlowData"],
    queryFn: async () => {
      const res = await fetchFlowData("X - State/SSC", careerOption);
      setFlowData(res?.data);
      return res?.data;
    },
    enabled: !!careerOption,
  });

  const handleNodeClick = (event: React.MouseEvent, node: Node) => {
    // Navigate based on the node ID
    if (node.data.clickable === false) {
      return;
    }
    router.push(
      `/details?careerOption=${careerOption}&careerPath=${node.data?.label}`
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-gray-600 mb-4 mt-3 text-center ml-auto mr-auto">
        Career Roadmap
      </h1>
      <div className="px-4 sm:px-6 text-center">
        <p className="text-lg sm:text-xl text-gray-600 mb-4">
          Visualize your career journey from where you are to where you want to
          be. Each step represents an important milestone. Click on any step to
          explore detailed information and make informed decisions.
        </p>
        <p className="text-md text-gray-500">
          Not sure what to do? Just tap the chart nodes to dive deeper!
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-400 to-blue-600 py-12 px-4 sm:px-6 mt-6 mb-6 text-center rounded-lg shadow-lg mx-auto w-[92%] sm:w-[75%]">
        <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed mb-6">
          As of now, the flow chart primarily focuses on the Secondary School
          education systems of Telangana and Andhra Pradesh. However, this
          should not limit your exploration. It provides a broad overview of the
          opportunities available in various careers, helping you visualize the
          path ahead and make informed choices about your future.
        </p>

        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          While our focus is on these specific education boards, we encourage
          you to use this as a foundation to explore the vast opportunities
          available, no matter your educational background. Your future is yours
          to shape!
        </p>
      </div>

      <div className="px-4 sm:px-6 mt-6 mb-6 mx-auto w-[92%] sm:w-[75%]">
        <div className="bg-gradient-to-r from-[#34a3a7] to-[#66c7c1] p-6 rounded-lg shadow-2xl">
          <span className="block text-xl text-white font-semibold mb-3">
            <strong>Are you a CBSE student? Don't worry!</strong>
          </span>
          <p className="text-white">
            If you're studying under the CBSE board, think of SSC's Intermediate
            as equivalent to your Class 11th and 12th. You can start exploring
            the career options available to you right now!
          </p>
          <p className="mt-4 text-white">
            We understand your specific needs, and we're currently working on
            adding CBSE-specific adjustments to the app. Stay tuned, as we'll
            soon offer personalized guidance for your journey!
          </p>
        </div>
      </div>

      <div className="flex justify-center px-4 sm:px-6 mt-6 mb-6">
        <div className="w-full max-w-4xl h-[80vh] sm:p-6 flex flex-col border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden">
          <div className="flex-grow flex items-center justify-center relative">
            {isLoading ? (
              <p className="text-xl font-semibold text-gray-600">Loading...</p>
            ) : (
              <ReactFlow
                nodes={flowData.nodes}
                edges={flowData.edges}
                onNodeClick={handleNodeClick}
                style={{ height: "100%", width: "100%" }}
                panOnDrag={false}
                panOnScroll={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                elementsSelectable={false}
                fitView
                fitViewOptions={{
                  padding: 0.2,
                }}
                proOptions={{ hideAttribution: true }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 mt-4 mb-4">
        <span className="block font-semibold text-gray-600 bg-gray-100 border-l-4 border-yellow-400 p-4 rounded-md">
          Since you're looking for career options after 10th and pursue your
          dream profession, some steps in your journey (like
          <span className="font-extrabold">{` X - State/SSC`}</span>,
          <span className="font-extrabold">{careerOption}</span>) are starting
          and ending points that don't need clicking. The chart focuses on
          helping you explore the paths that lead to your dream career.
        </span>
      </div>
    </div>
  );
};

export default Flow;

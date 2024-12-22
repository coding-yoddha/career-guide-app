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
          Picture your career journey as a series of stepping stones. Each box
          in the chart below represents a significant milestone guiding you
          toward your dream career.
        </p>

        <div className="px-4 sm:px-6 text-center">
          <p className="mt-4 text-md text-gray-500">
            Whether you're planning your next move or just starting to explore
            options, these steps will guide you toward making informed decisions
            about your future.
          </p>
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-6 px-6 mt-6 mb-6 rounded-lg shadow-lg mx-auto w-full sm:w-[75%]">
            <div className="text-center">
              <p className="text-xl font-semibold leading-relaxed">
                <span className="inline-block animate-bounce text-blue-600 text-3xl mx-2">
                  ⬇️
                </span>
                Tap on any box in the chart below to uncover insights for your
                next step.
              </p>
            </div>
          </div>
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
          <span className="font-extrabold">{` X Grade`}</span>,
          <span className="font-extrabold">{careerOption}</span>) are starting
          and ending points that don't need clicking. The chart focuses on
          helping you explore the paths that lead to your dream career.
        </span>
      </div>
    </div>
  );
};

export default Flow;

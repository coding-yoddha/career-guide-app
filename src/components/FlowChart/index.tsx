"use client";

import { useEffect, useState } from "react";
import { ReactFlow, Controls, Background, Node, Edge } from "@xyflow/react";
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
      console.log("res?.data", res?.data);
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
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4 sm:px-6">
      <div className="w-full max-w-4xl h-[70vh] p-6 flex flex-col border-2 border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden">
        {/* Title Section */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Roadmap
        </h1>

        {/* Content Section */}
        <div className="flex-grow flex items-center justify-center">
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
  );
};

export default Flow;

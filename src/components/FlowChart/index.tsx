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
      <h1 className="text-3xl font-extrabold text-gray-600 mb-2 text-center">
        Career Roadmap
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Explore the key steps in your career journey. Click on any step to learn
        more about it.
      </p>

      <div className="flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-4xl h-[80vh] p-6 flex flex-col border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden">
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
      <span className="block m-2 font-semibold text-gray-600 bg-gray-100 border-l-4 border-yellow-400 p-4 rounded-md ">
        Since you are looking for what's next after 10th, you won't be able to
        click on <span className="font-extrabold">X - State/SSC</span>
      </span>
    </div>
  );
};

export default Flow;

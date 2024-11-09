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
    router.push(
      `/details?careerOption=${careerOption}&careerPath=${node.data?.label}`
    );
  };

  return (
    <div className="flex justify-center min-h-screen mt-16">
      <div className="w-3/4 h-[50vh] flex flex-col items-center border-2 border-gray-600 rounded m-2">
        {isLoading ? (
          "Loading..."
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
  );
};

export default Flow;

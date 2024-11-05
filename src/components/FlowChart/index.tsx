"use client";

import { useEffect, useState } from "react";
import { ReactFlow, Controls, Background, Node, Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useRouter } from "next/navigation";

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
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  useEffect(() => {
    fetch(
      `${baseUrl}/api/getFlows?start=${"10th"}&end=${"Electrical Engineering"}`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        setFlowData(data?.data);
      });
  }, []);

  const handleNodeClick = (event: React.MouseEvent, node: Node) => {
    // Navigate based on the node ID
    if (node.id === "1") {
      router.push("/engineering");
    } else if (node.id === "2") {
      router.push("/engineering/intermediate");
    } else if (node.id === "3") {
      router.push("/engineering/btech");
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-3/4 h-[50vh] flex flex-col items-center border-2 border-gray-600 rounded m-2">
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
      </div>
    </div>
  );
};

export default Flow;

"use client";

import { useEffect, useState } from "react";
import { ReactFlow, Controls, Background } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useRouter } from "next/navigation";

const edges = [
  { id: "1-2", source: "1", target: "2", type: "bezier" },
  { id: "2-3", source: "2", target: "3", type: "bezier" },
  { id: "3-4", source: "3", target: "4", type: "bezier" },
  { id: "3-5", source: "3", target: "5", type: "bezier" },
  { id: "3-6", source: "3", target: "6", type: "bezier" },
  { id: "3-7", source: "3", target: "7", type: "bezier" },
];

const nodes = [
  {
    id: "1",
    data: { label: "10th Class" },
    position: { x: 100, y: 0 },
    type: "input",
    style: {
      backgroundColor: "#ffcccb",
      color: "#333",
      border: "2px solid #ff7f7f",
      cursor: "pointer",
    },
  },
  {
    id: "2",
    data: { label: "Intermediate" },
    position: { x: 100, y: 100 },
    style: {
      backgroundColor: "#add8e6",
      color: "#333",
      border: "2px solid #007bff",
      cursor: "pointer",
    },
  },
  {
    id: "3",
    data: { label: "Engineering" },
    position: { x: 100, y: 200 },
    style: {
      backgroundColor: "#d3ffd3",
      color: "#333",
      border: "2px solid #28a745",
      cursor: "pointer",
    },
  },
  {
    id: "4",
    data: { label: "Software Engineering" },
    position: { x: -100, y: 300 },
    style: {
      backgroundColor: "#ffe4b5",
      color: "#333",
      border: "2px solid #ffa500",
      cursor: "pointer",
    },
  },
  {
    id: "5",
    data: { label: "Electrical Engineering" },
    position: { x: 100, y: 300 },
    style: {
      backgroundColor: "#f0e68c",
      color: "#333",
      border: "2px solid #ffd700",
      cursor: "pointer",
    },
  },
  {
    id: "6",
    data: { label: "Mechanical Engineering" },
    position: { x: 300, y: 300 },
    style: {
      backgroundColor: "#b0c4de",
      color: "#333",
      border: "2px solid #4682b4",
      cursor: "pointer",
    },
  },
  {
    id: "7",
    data: { label: "Civil Engineering" },
    position: { x: 500, y: 300 },
    style: {
      backgroundColor: "#ffdab9",
      color: "#333",
      border: "2px solid #cd853f",
      cursor: "pointer",
    },
  },
];

function Flow() {
  const [flowData, setFlowData] = useState({
    nodes: [],
    edges: [],
  });
  const router = useRouter();
  useEffect(() => {
    fetch(
      `http://localhost:3000/api/getFlows?start=${"10th"}&end=${"Electrical Engineering"}`,
      { method: "GET" }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setFlowData(data?.data);
      });
  }, []);

  const handleNodeClick = (event, node) => {
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
    <div className="flex  justify-center min-h-screen">
      <div className="w-3/4 h-[50vh] flex flex-col items-center border-2 border-gray-600 rounded m-2">
        <ReactFlow
          nodes={flowData.nodes}
          edges={flowData.edges}
          onNodeClick={handleNodeClick}
          style={{ height: "100%", width: "100%" }} // Full height and width on ReactFlow
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
}

export default Flow;

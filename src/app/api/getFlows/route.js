import connectToDB from "../../../../config/database";
import { NextResponse } from "next/server";
import AcademicsMap from "../../../models/academicsMap";

function convertPathsToNodes(paths) {
  const uniqueNodes = new Map();
  const edges = [];
  let idCounter = 1;
  const yOffset = 100;
  const xOffset = 200;

  for (var path of paths) {
    for (var index in path) {
      const node = path[index];
      if (!uniqueNodes.has(node)) {
        uniqueNodes.set(node, {
          id: idCounter.toString(),
          data: { label: node },
          position: { x: xOffset, y: index * yOffset },
          type: index === 0 ? "input" : "default",
          style: {
            backgroundColor: "#ffcccb",
            color: "#333",
            border: "2px solid #ff7f7f",
            cursor: "pointer",
          },
        });
        idCounter++;
      }
    }
  }

  for (var path of paths) {
    for (var index in path) {
      const node = path[index];

      if (index < path.length - 1) {
        const sourceId = uniqueNodes.get(node).id;
        const targetId = uniqueNodes.get(path[Number(index) + 1]).id;
        edges.push({
          id: `${sourceId}-${targetId}`,
          source: sourceId,
          target: targetId,
          type: "bezier",
        });
      }
    }
  }

  const nodeArray = Array.from(uniqueNodes.values());
  console.log(nodeArray, edges);
  return { nodes: nodeArray, edges };
}

function generateFlowChartData(start, end, nodes) {
  const paths = [];

  function dfs(currentPath, currentNode) {
    // If current node is the target end, save the path
    if (currentNode === end) {
      paths.push([...currentPath]);
      return;
    }

    // Explore all connected nodes
    for (const node of nodes) {
      if (node.start === currentNode && !currentPath.includes(node.end)) {
        currentPath.push(node.end);
        dfs(currentPath, node.end);
        currentPath.pop(); // Backtrack
      }
    }
  }

  // Start the DFS from the given starting node
  dfs([start], start);
  console.log(paths);
  const result = convertPathsToNodes(paths);
  console.log(JSON.stringify(result));
  return result;
}

export async function GET(req) {
  try {
    await connectToDB();
    const data = await AcademicsMap.find({});

    if (data) {
      const { searchParams } = new URL(req.url);
      const start = searchParams.get("start");
      const end = searchParams.get("end");
      console.log(start, end);
      return NextResponse.json({
        success: true,
        data: generateFlowChartData(start, end, data),
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong! Please try again later.",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Something went wrong! Please try again later.",
    });
  }
}

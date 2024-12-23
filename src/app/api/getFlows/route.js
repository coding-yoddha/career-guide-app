import connectToDB from "../../../../config/database";
import { NextResponse } from "next/server";
import AcademicsMap from "../../../models/academicsMap";
export const dynamic = "force-dynamic"; // Ensure dynamic rendering

function convertPathsToNodes(paths, start, end) {
  const uniqueNodes = new Map();
  const edges = [];
  let idCounter = 1;
  const yOffset = 100; // Distance between levels on the y-axis
  const xOffsetBase = 200; // Base distance for x-axis spacing

  // Keep track of node positions at each level
  const levelPositions = new Map();

  for (const path of paths) {
    for (let index = 0; index < path.length; index++) {
      const node = path[index];

      // Calculate the x-axis position dynamically
      if (!uniqueNodes.has(node)) {
        // If the level doesn't exist in levelPositions, initialize it
        if (!levelPositions.has(index)) {
          levelPositions.set(index, 0);
        }

        // Set the x-axis position based on the number of nodes at this level
        const currentXOffset = levelPositions.get(index) * xOffsetBase;
        uniqueNodes.set(node, {
          id: idCounter.toString(),
          data: {
            label: node,
            clickable: !(node === start || node === end),
          },
          position: { x: currentXOffset, y: index * yOffset },
          type: index === 0 ? "input" : "default",
          style: {
            background:
              node === start || node === end
                ? "linear-gradient(to bottom, #f2f2f2, #d9d9d9)" // Neutral gray-to-white for non-clickable
                : "linear-gradient(to bottom, #c084fc, #f472b6)", // Soft purple-to-pink for clickable

            color: node === start || node === end ? "#607d8b" : "#ffffff", // Subtle text for non-clickable
            border:
              "2px solid " +
              (node === start || node === end ? "#bcbcbc" : "#c084fc"),
            cursor: node === start || node === end ? "not-allowed" : "pointer",
            boxShadow:
              node === start || node === end
                ? "none"
                : "0px 8px 16px rgba(0, 0, 0, 0.2)",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
          },
        });

        // Increment the counter for the current level and the ID counter
        levelPositions.set(index, levelPositions.get(index) + 1);
        idCounter++;
      }
    }
  }

  for (const path of paths) {
    for (let index = 0; index < path.length - 1; index++) {
      const sourceId = uniqueNodes.get(path[index]).id;
      const targetId = uniqueNodes.get(path[index + 1]).id;
      edges.push({
        id: `${sourceId}-${targetId}`,
        source: sourceId,
        target: targetId,
        type: "bezier",
      });
    }
  }

  const nodeArray = Array.from(uniqueNodes.values());
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
  const result = convertPathsToNodes(paths, start, end);
  return result;
}

export async function GET(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const start = searchParams.get("start");
    const end = searchParams.get("end");
    const career = searchParams.get("career");
    const data = await AcademicsMap.find({career});

    if (data) {
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

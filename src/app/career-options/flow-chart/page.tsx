"use client";
import Flow from "@/components/FlowChart";
import { useSearchParams } from "next/navigation";

const FlowData = () => {
  const searchParams = useSearchParams();
  const careerOption = searchParams.get("careerOption");

  return (
    <div>
      <Flow careerOption={careerOption} />
    </div>
  );
};

export default FlowData;

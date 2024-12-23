"use client";
import Flow from "@/components/FlowChart";
import { useSearchParams } from "next/navigation";

const FlowData = () => {
  const searchParams = useSearchParams();
  const careerOption = searchParams.get("careerOption");
  const career = searchParams.get("career");

  return (
    <div>
      <Flow careerOption={careerOption} career={career} />
    </div>
  );
};

export default FlowData;

"use client";
import OptionsDetails from "@/components/OptionsDetails";
import { useSearchParams } from "next/navigation";

const CareerOptions = () => {
  const searchParams = useSearchParams();
  const career = searchParams.get("careerName");

  return (
    <div>
      <OptionsDetails career={career} />
    </div>
  );
};

export default CareerOptions;

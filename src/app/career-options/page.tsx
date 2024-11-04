"use client";
import OptionsDetails from "@/components/OptionsDetails";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const CareerOptions = () => {
  const searchParams = useSearchParams();
  const career = searchParams.get("careerName");
  console.log("career ", career);
  const router = useRouter();

  // useEffect(() => {
  //   if (career) {
  //     //Step: fetch call with career as param
  //     //router.replace("/career-options");
  //   }
  // }, [career]);
  return (
    <div>
      <OptionsDetails career={career} />
    </div>
  );
};

export default CareerOptions;

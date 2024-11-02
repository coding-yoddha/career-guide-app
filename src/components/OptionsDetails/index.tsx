"use client";
import { useRouter } from "next/navigation";

const OptionsDetails = () => {
  const router = useRouter();
  return (
    <div style={{ marginTop: "100px" }}>
      <button
        onClick={() => router.push("/engineering-options/electrical-engineer")}
      >
        Click me
      </button>
    </div>
  );
};

export default OptionsDetails;

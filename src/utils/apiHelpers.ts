const fetchFlowData = async (start: string | null, end: string | null) => {
  const res = await fetch(`/api/getFlows?start=${start}&end=${end}`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

const fetchCareerOptions = async (career: string | null) => {
  const res = await fetch(`/api/getOptions?option=${career}`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

const fetchEducationDetails = async (
  role: string | null,
  education: string | null
) => {
  const res = await fetch(
    `/api/getEducationDetails?role=${role}&education=${education}`,
    {
      method: "GET",
    }
  );
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

export { fetchFlowData, fetchCareerOptions, fetchEducationDetails };

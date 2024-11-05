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
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`/api/getOptions?option=${career}`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

export { fetchFlowData, fetchCareerOptions };

const fetchFlowData = async (start: string | null, end: string | null, career: string | null) => {
  const res = await fetch(`/api/getFlows?start=${start}&end=${end}&career=${career}`, {
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

const fetchAllCareers = async () => {
  const res = await fetch(`/api/getCareers`, {
    method: "GET",
  });
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await res.json();
  return data;
};

export {
  fetchFlowData,
  fetchCareerOptions,
  fetchEducationDetails,
  fetchAllCareers,
};

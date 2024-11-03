import Details from "@/components/Details";

export default function Intermediate() {
  return (
    <Details
      title={"Heading 1"}
      titleDescription={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque accumsan purus ut ullamcorper pretium. Donec inbibendum risus. Suspendisse id felis nisi. Nulla facilisi. Maecenasvestibulum ornare enim, eget malesuada lorem malesuada eget."
      }
      focusSubjects={[
        "Subject 1",
        "Subject 2",
        "Subject 3",
        "Subject 4",
        "Subject 5",
      ]}
      additionalInformation={
        "Integer vel risus id ligula gravida finibus. Etiam faucibus malesuada nulla a ultricies. Fusce sit amet ex id libero vehicula fringilla. Aenean non eros a risus commodo pharetra eget ut elit. Nulla facilisi."
      }
      resources={[
        {
          resourceId: 1,
          resourceName: "Resource 1",
          resourceLink: "https://example.com",
        },
        {
          resourceId: 2,
          resourceName: "Resource 2",
          resourceLink: "https://example.com",
        },
        {
          resourceId: 3,
          resourceName: "Resource 3",
          resourceLink: "https://example.com",
        },
        {
          resourceId: 4,
          resourceName: "Resource 4",
          resourceLink: "https://example.com",
        },
        {
          resourceId: 5,
          resourceName: "Resource 5",
          resourceLink: "https://example.com",
        },
      ]}
    />
  );
}

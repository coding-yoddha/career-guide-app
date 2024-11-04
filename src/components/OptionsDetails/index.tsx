"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const OptionsDetails = () => {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      title: "Software Engineering",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate obcaecati facere cum dicta exercitationem rem vero eligendi soluta, molestiae suscipit quisquam voluptas quam saepe, consectetur quidem, ipsa repellendus vitae?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate obcaecati facere cum dicta exercitationem rem vero eligendi soluta, molestiae suscipit quisquam voluptas quam saepe, consectetur quidem, ipsa repellendus vitae?",
      urlParam: "software-engineer",
    },
    {
      id: 2,
      title: "Mechanical Engineering",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate obcaecati facere cum dicta exercitationem rem vero eligendi soluta, molestiae suscipit quisquam voluptas quam saepe, consectetur quidem, ipsa repellendus vitae?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate obcaecati facere cum dicta exercitationem rem vero eligendi soluta, molestiae suscipit quisquam voluptas quam saepe, consectetur quidem, ipsa repellendus vitae?",
      urlParam: "mechanical-engineer",
    },
    {
      id: 3,
      title: "Electrical Engineering",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate obcaecati facere cum dicta exercitationem rem vero eligendi soluta, molestiae suscipit quisquam voluptas quam saepe, consectetur quidem, ipsa repellendus vitae?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate obcaecati facere cum dicta exercitationem rem vero eligendi soluta, molestiae suscipit quisquam voluptas quam saepe, consectetur quidem, ipsa repellendus vitae?",
      urlParam: "electrical-engineer",
    },
    {
      id: 4,
      title: "Civil Engineering",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate obcaecati facere cum dicta exercitationem rem vero eligendi soluta, molestiae suscipit quisquam voluptas quam saepe, consectetur quidem, ipsa repellendus vitae?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptate obcaecati facere cum dicta exercitationem rem vero eligendi soluta, molestiae suscipit quisquam voluptas quam saepe, consectetur quidem, ipsa repellendus vitae?",
      urlParam: "civil-engineer",
    },
  ];

  return (
    <div
      className="flex justify-start bg-gradient-to-b from-white to-blue-100 min-h-screen w-full"
      style={{ marginTop: "6%" }}
    >
      <div className="w-3/4 max-w-4xl space-y-6 ml-10 mb-4">
        <h1 className="text-3xl font-semibold text-blue-800 mb-8">
          Explore Your Options
        </h1>

        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h2>
            <p className="text-gray-600 mb-4">{card.content}</p>

            <Button
              onClick={() => {}}
              className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Learn More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OptionsDetails;

import Image from "next/image";
import goingUpIcon from "../../public/going-up.png";

const AboutUs = () => {
  return (
    <div
      className="bg-gray-50 min-h-screen flex  justify-center py-12 px-6 lg:px-8 w-full"
      style={{ marginTop: "3%" }}
    >
      <div className="max-w-2xl  p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600">
          About Us
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          We are a dedicated team passionate about guiding school children and
          their parents through the various career options available after
          completing their 10th and 12th grades.
        </p>

        <p className="mt-4 text-gray-600">
          In today’s fast-paced world, it is crucial for students to be aware of
          the opportunities that lie ahead of them. Our mission is to provide
          comprehensive information about different career paths, the
          educational courses required to achieve them, and the skills needed to
          thrive in various professions.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-700">Our Vision</h3>
        <p className="mt-2 text-gray-600">
          We envision a future where every student makes informed career
          choices, equipped with the knowledge and guidance necessary to pursue
          their passions and dreams.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-700">
          Our Mission
        </h3>
        <p className="mt-2 text-gray-600">
          Our mission is to bridge the gap between students and the myriad of
          career options available in India. We aim to empower students and
          their parents with information, resources, and support to navigate
          their educational journeys effectively.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-gray-700">
          What We Offer
        </h3>
        <ul className="mt-2 list-disc list-inside text-gray-600">
          <li>Detailed information about various career paths.</li>
          <li>Guidance on courses and skills required for each career.</li>
          <li>
            Resources for both students and parents to make informed decisions.
          </li>
          <li>Support through interactive tools and expert advice.</li>
        </ul>

        <p className="mt-4 text-gray-600">
          Join us in helping the next generation find their path and succeed in
          their chosen careers. Together, we can make a difference!
        </p>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold text-blue-600">Connect with Us</h3>
          <p className="mt-2 text-gray-600">
            For inquiries and more information:
          </p>
          <p className="text-gray-600">Email: support@example.com</p>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={goingUpIcon}
          alt="going-up"
          style={{ height: "50rem", width: "50rem" }}
        />
      </div>
    </div>
  );
};

export default AboutUs;

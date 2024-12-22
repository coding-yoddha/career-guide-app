import Image from "next/image";
import goingUpIcon from "../../public/career-growth.svg";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row justify-center py-12 px-6 lg:px-8 w-full">
      <div className="max-w-3xl p-8 flex-1">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-6">
          About Us
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          We are a dedicated team passionate about guiding school children and
          their parents through the various career options available after
          completing their 10th and 12th grades.
        </p>

        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
          In today’s fast-paced world, it is crucial for students to be aware of
          the opportunities that lie ahead of them. Our mission is to provide
          comprehensive information about different career paths, the
          educational courses required to achieve them, and the skills needed to
          thrive in various professions.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-gray-800">
          Our Vision
        </h3>
        <p className="mt-2 text-lg text-gray-700">
          We envision a future where every student makes informed career
          choices, equipped with the knowledge and guidance necessary to pursue
          their passions and dreams.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-gray-800">
          Our Mission
        </h3>
        <p className="mt-2 text-lg text-gray-700">
          Our mission is to bridge the gap between students and the myriad of
          career options available in India. We aim to empower students and
          their parents with information, resources, and support to navigate
          their educational journeys effectively.
        </p>

        <h3 className="mt-6 text-2xl font-semibold text-gray-800">
          What We Offer
        </h3>
        <ul className="mt-2 list-disc list-inside text-lg text-gray-700">
          <li>Detailed information about various career paths.</li>
          <li>Guidance on courses and skills required for each career.</li>
          <li>
            Resources for both students and parents to make informed decisions.
          </li>
          <li>Support through interactive tools and expert advice.</li>
        </ul>

        <p className="mt-4 text-lg text-gray-700">
          Join us in helping the next generation find their path and succeed in
          their chosen careers. Together, we can make a difference!
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src={goingUpIcon}
          alt="career-growth-icon"
          className="w-full max-w-[30rem] h-auto mx-auto lg:max-w-[40rem]"
        />
      </div>
    </div>
  );
};

export default AboutUs;

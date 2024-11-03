"use client";

import Link from "next/link";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Custom404() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-800 text-center">
      <h1 className="text-8xl md:text-[12.5rem] text-gray-200 tracking-wide shadow-md">
        4
        <span className="inline-block animate-spooky text-blue-400">
          <FontAwesomeIcon icon={faGhost} />
        </span>
        4
      </h1>
      <h2 className="text-gray-200 text-xl md:text-2xl mb-4">
        Error: 404 page not found
      </h2>
      <p className="text-gray-400">
        Sorry, the page you're looking for cannot be accessed.
      </p>
      <Link href="/" className="mt-4 text-blue-400 hover:text-blue-300">
        Go Back Home
      </Link>
    </main>
  );
}

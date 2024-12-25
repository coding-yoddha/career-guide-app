"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { fetchCareerOptions } from "@/utils/apiHelpers";
import { Skeleton } from "../ui/skeleton";
import ComingSoonPage from "../ComingSoon";

// Defining a type for card data
interface Card {
  _id: number;
  choice: string;
  description: string;
  dailyLifeExample: string;
  urlParam: string;
}

interface OptionsDetailsProps {
  career: string | null;
}

const CARDS_PER_PAGE = 5;

const OptionsDetails: React.FC<OptionsDetailsProps> = ({ career }) => {
  const router = useRouter();
  const [description, setDescription] = useState<string | null>(null);
  const [optionData, setOptionData] = useState<Card[]>([]);
  const [filteredData, setFilteredData] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showComingSoon, setShowComingSoon] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { isError, isLoading } = useQuery({
    queryKey: ["getCareerOptions"],
    queryFn: async () => {
      const res = await fetchCareerOptions(career);
      setOptionData(res?.data?.options);
      setFilteredData(res?.data?.options);
      setDescription(res?.data?.description);
      !res.data.options.length
        ? setShowComingSoon(true)
        : setShowComingSoon(false);
      return res?.data;
    },
    enabled: !!career,
  });

  const totalPages = Math.ceil(filteredData.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const cardsToDisplay = filteredData.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePageChange = (page: number) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setCurrentPage(page);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const filtered = optionData.filter(
        (card) =>
          card.choice.toLowerCase().includes(term) ||
          card.description.toLowerCase().includes(term)
      );
      setFilteredData(filtered);
      setCurrentPage(1); // Reset to first page on search
    } else {
      setFilteredData(optionData); // Reset to all cards
    }
  };

  return (
    <>
      {!isLoading && showComingSoon ? (
        <ComingSoonPage />
      ) : (
        <div className="flex flex-col bg-gradient-to-b from-white to-blue-100 min-h-screen w-full px-4 sm:px-10">
          {/* Render description if available */}
          {
            <div className="border-l-4 border-blue-500 pl-6 py-4  rounded-md shadow-sm my-6">
              <h2 className="text-2xl sm:text-2xl font-semibold text-gray-800 mb-3">
                About This Career
              </h2>
              {isLoading ? (
                <Skeleton className="h-8 w-2/3 rounded-lg" />
              ) : (
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          }

          {/* Search bar and heading */}
          <div className="flex flex-col sm:flex-col justify-center gap-6 mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 sm:mb-0">
              Explore Your Options
            </h1>
            <input
              type="text"
              placeholder="Search for options..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Card list */}
          <div className="grid grid-cols-1 gap-6 sm:w-[45%]">
            {isLoading
              ? [...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                  >
                    <Skeleton className="h-8 w-1/3 rounded-lg" />
                    <Skeleton className="h-[80px] w-full mt-4" />
                    <Skeleton className="h-8 w-[100px] rounded-lg mt-4" />
                  </div>
                ))
              : cardsToDisplay.map((card) => (
                  <div
                    key={card._id}
                    className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                  >
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {card.choice}
                    </h2>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <Button
                      onClick={() => {
                        router.push(
                          `/career-options/flow-chart?career=${career}&careerOption=${card.choice}`
                        );
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                    >
                      Learn More
                    </Button>
                  </div>
                ))}
          </div>

          {/* Pagination */}
          {filteredData.length > 0 && (
            <div className="flex justify-center mt-6 mb-4">
              <Pagination>
                <PaginationContent>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    aria-disabled={currentPage === 1}
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  >
                    Previous
                  </PaginationPrevious>
                  <PaginationItem>
                    {Array.from({ length: totalPages }, (_, index) => (
                      <PaginationLink
                        key={index}
                        isActive={currentPage === index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className="cursor-pointer"
                      >
                        {index + 1}
                      </PaginationLink>
                    ))}
                  </PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    aria-disabled={currentPage === totalPages}
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  >
                    Next
                  </PaginationNext>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default OptionsDetails;

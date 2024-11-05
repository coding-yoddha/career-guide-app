"use client";

import { useState } from "react";
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
  const [optionData, setOptionData] = useState<Card[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { isError, isLoading } = useQuery({
    queryKey: ["getCareerOptions"],
    queryFn: async () => {
      const res = await fetchCareerOptions(career);
      setOptionData(res?.data);
      return res?.data;
    },
    enabled: !!career,
  });

  const totalPages = Math.ceil(optionData.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const cardsToDisplay = optionData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setCurrentPage(page);
  };

  return (
    <div
      className="flex justify-start bg-gradient-to-b from-white to-blue-100 min-h-screen w-full"
      style={{ marginTop: "6%" }}
    >
      <div className="w-3/4 max-w-4xl space-y-6 ml-10 mb-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">
          Explore Your Options
        </h1>

        {isLoading ? (
          <div className="flex flex-col space-y-4">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <Skeleton className="h-8 w-1/3 rounded-lg" />
                <div className="space-y-2 mt-4">
                  <Skeleton className="h-[80px] w-full" />
                </div>
                <div className="mt-4">
                  <Skeleton className="h-8 w-[100px] rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          cardsToDisplay.map((card) => (
            <div
              key={card._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {card.choice}
              </h2>
              <p className="text-gray-600 mb-4">{card.description}</p>

              <Button
                onClick={() => {
                  router.push(
                    `/career-options/flow-chart?careerOption=${card.choice}`
                  );
                }}
              >
                Learn More
              </Button>
            </div>
          ))
        )}

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
    </div>
  );
};

export default OptionsDetails;

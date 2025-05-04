import React from "react";

interface PaginationProps {
  currentPage: number;
  limit: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  limit,
  totalItems,
  onPageChange,
}) => {
  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, totalItems);

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="text-sm text-gray-700">
        Showing {startItem}-{endItem} of {totalItems} - {currentPage}
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage * limit >= totalItems}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;

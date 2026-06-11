import React from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

function Pagination({
  currentPage = 1,
  totalPages = 4,
  onPageChange,
}) {
  // Generate page numbers array
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages && onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 select-none py-4">
      {/* Previous Page Button (<<) */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
        className={`w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-base sm:text-lg transition-all duration-200 focus:outline-none ${
          currentPage === 1
            ? 'bg-[#f5f5f5] text-slate-300 cursor-not-allowed opacity-60'
            : 'bg-[#f5f5f5] text-slate-800 hover:bg-[#C51C1C] hover:text-white active:scale-95'
        }`}
        aria-label="Previous page"
      >
        <FiChevronsLeft />
      </button>

      {/* Page Numbers */}
      {pages.map((page) => {
        const isActive = page === currentPage;
        const pageLabel = page.toString().padStart(2, '0');
        
        return (
          <button
            key={page}
            type="button"
            onClick={() => handlePageClick(page)}
            className={`w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center font-sans font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 focus:outline-none ${
              isActive
                ? 'bg-[#C51C1C] text-white shadow-sm'
                : 'bg-[#f5f5f5] text-[#1a1a1a] hover:bg-slate-200 active:scale-95'
            }`}
          >
            {pageLabel}
          </button>
        );
      })}

      {/* Next Page Button (>>) */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
        className={`w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center text-base sm:text-lg transition-all duration-200 focus:outline-none ${
          currentPage === totalPages
            ? 'bg-[#f5f5f5] text-slate-300 cursor-not-allowed opacity-60'
            : 'bg-[#f5f5f5] text-slate-800 hover:bg-[#C51C1C] hover:text-white active:scale-95'
        }`}
        aria-label="Next page"
      >
        <FiChevronsRight />
      </button>
    </div>
  );
}

export default Pagination;
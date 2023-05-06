import React from "react";

function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav className="pagination">
        <ul className="flex space-x-2">
          <span className="text-textWhite font-semibold text-lg">Page</span>{" "}
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`px-3 py-1 rounded ${
                pageNumber === currentPage
                  ? "bg-[#FFB800] text-white"
                  : "bg-secondry"
              }`}
            >
              <button onClick={() => onPageChange(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export { Pagination };

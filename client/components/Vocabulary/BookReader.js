import React, { useState } from "react";

const BookReader = ({ book }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // This would be the content of the book, ideally fetched from an API
  const pages = book.pages;

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="book-reader">
      <div className="page">{pages[currentPage]}</div>
      <button onClick={prevPage} disabled={currentPage === 0}>
        Previous
      </button>
      <button onClick={nextPage} disabled={currentPage === pages.length - 1}>
        Next
      </button>
    </div>
  );
};

export default BookReader;

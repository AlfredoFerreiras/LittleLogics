import React from "react";

const BookDetail = ({ book }) => {
  // This would ideally come from state or props
  const { title, cover, author } = book;

  return (
    <div className="book-detail">
      <img src={cover} alt={`Cover of ${title}`} />
      <h3>{title}</h3>
      <p>Author: {author}</p>
      {/* Implement the "Read" button functionality */}
      <button>Read</button>
    </div>
  );
};

export default BookDetail;

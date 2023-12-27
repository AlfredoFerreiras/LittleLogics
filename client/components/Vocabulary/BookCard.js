import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img
        src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
        alt={`${book.title} cover`}
      />
      <h3>{book.title}</h3>
      <Link to={`/vocabulary/${book.key}`}>Read More</Link>
    </div>
  );
};

export default BookCard;

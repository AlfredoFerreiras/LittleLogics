import React, { useState, useEffect } from "react";
import BookCard from "./BookCard"; // Make sure this component exists

const BookCategory = ({ category }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://openlibrary.org/subjects/${category.toLowerCase()}.json`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setBooks(data.works);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="book-category">
      <h2>{category}</h2>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BookCategory;

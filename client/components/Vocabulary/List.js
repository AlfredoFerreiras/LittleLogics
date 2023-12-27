import React from "react";
import BookCategory from "./BookCategory";

const List = () => {
  // This would ideally come from an API call
  const categories = ["Animals", "Space", "Fairy Tales"];

  return (
    <div className="vocabulary-index">
      <h1>Vocabulary Categories</h1>
      {categories.map((category, index) => (
        <BookCategory key={index} category={category} />
      ))}
    </div>
  );
};

export default List;

import React, { useRef } from "react";
import "../styles/CategoryRow.css";

function CategoryRow({ title, books }) {
  const rowRef = useRef();

  const scrollLeft = () => {
    rowRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="category-row">
      <button className="scroll-btn left" onClick={scrollLeft}>◀</button>
      <div className="category-row-inner" ref={rowRef}>
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.imagen} alt={book.titulo} />
            <p>{book.titulo}</p>
            <p>Autor:{book.autor}</p>
            <p>${book.precio}.00</p>
          </div>
        ))}
      </div>
      <button className="scroll-btn right" onClick={scrollRight}>▶</button>
    </div>
  );
}

export default CategoryRow;

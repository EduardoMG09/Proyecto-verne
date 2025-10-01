export default function BookCard({ book }) {
  return (
    <article className="book-card">
      <div className="book-thumb">
        <img src={book.imagen} alt={`Portada de ${book.titulo}`} />
      </div>
      <div className="book-info">
        <h3 className="book-title">{book.titulo}</h3>
        <p className="book-author">{book.autor}</p>
        <p className="book-price">${book.precio}</p>
      </div>
    </article>
  );
}

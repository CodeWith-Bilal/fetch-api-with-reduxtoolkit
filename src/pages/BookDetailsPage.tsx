import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/rootReducer";

const BookDetailsPage: React.FC = () => {
  const { id } = useParams();
  const book = useSelector((s: RootState) =>
    (s as any).books.items.find((b: any) => b.id === id)
  );

  if (!book) return <div>Book not found.</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        <strong>Author:</strong> {book.author ?? "Unknown"}
      </p>
      <p>
        <strong>Quantity:</strong> {book.quantity}
      </p>
      <p>
        <strong>Price:</strong> ${book.price.toFixed(2)}
      </p>
    </div>
  );
};

export default BookDetailsPage;

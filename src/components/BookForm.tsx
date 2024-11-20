import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/bookSlice";
import { AppDispatch } from "../app/store";
import { v4 as uuidv4 } from "uuid";

const BookForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const dispatch = useDispatch<AppDispatch>();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;
    dispatch(
      addBook({
        id: uuidv4(),
        title: trimmed,
        author: author.trim() || undefined,
        quantity,
        price,
      })
    );
    setTitle("");
    setAuthor("");
    setQuantity(1);
    setPrice(0);
  };

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 8 }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Book title"
        style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd" }}
      />
      <input
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author (optional)"
        style={{ padding: 8, borderRadius: 6, border: "1px solid #ddd" }}
      />
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="number"
          value={quantity}
          min={0}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #ddd",
            width: 120,
          }}
        />
        <input
          type="number"
          value={price}
          min={0}
          step="0.01"
          onChange={(e) => setPrice(Number(e.target.value))}
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid #ddd",
            width: 160,
          }}
        />
      </div>
      <div>
        <button type="submit" style={{ padding: "8px 12px" }}>
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookForm;

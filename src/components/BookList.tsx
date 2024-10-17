import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/rootReducer";
import { removeBook, updateQuantity, updatePrice } from "../features/bookSlice";
import { AppDispatch } from "../app/store";
import { Link } from 'react-router-dom';

interface BookListProps {
  searchTerm?: string;
}

const BookList: React.FC<BookListProps> = ({ searchTerm = '' }) => {
  const books = useSelector((s: RootState) => (s as any).books.items as any[]);
  const dispatch = useDispatch<AppDispatch>();

  const filtered = books?.filter((b) => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    return (
      (b.title && b.title.toLowerCase().includes(q)) ||
      (b.author && b.author.toLowerCase().includes(q))
    );
  });

  if (!filtered || filtered.length === 0) return <div>No books match your search.</div>;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {filtered.map((b) => (
        <div
          key={b.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            borderRadius: 8,
            background: "#fff",
            boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link to={`/books/${b.id}`} style={{ fontWeight: 700, color: '#0f172a', textDecoration: 'none' }}>{b.title}</Link>
            <small style={{ color: "#666" }}>{b.author ?? "Unknown author"}</small>
            <div style={{ marginTop: 6 }}>
              <label style={{ marginRight: 8 }}>Qty:</label>
              <input
                type="number"
                value={b.quantity}
                min={0}
                onChange={(e) =>
                  dispatch(
                    updateQuantity({
                      id: b.id,
                      quantity: Number(e.target.value),
                    })
                  )
                }
                style={{ width: 80 }}
              />
            </div>
            <div style={{ marginTop: 6 }}>
              <label style={{ marginRight: 8 }}>Price:</label>
              <input
                type="number"
                value={b.price}
                min={0}
                step="0.01"
                onChange={(e) =>
                  dispatch(
                    updatePrice({ id: b.id, price: Number(e.target.value) })
                  )
                }
                style={{ width: 120 }}
              />
            </div>
          </div>

          <div>
            <button
              onClick={() => dispatch(removeBook(b.id))}
              style={{
                padding: "6px 10px",
                background: "transparent",
                border: "1px solid #e53e3e",
                color: "#e53e3e",
                borderRadius: 6,
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;

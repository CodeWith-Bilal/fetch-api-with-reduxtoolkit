import React, { useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import BookSearch from "../components/BookSearch";
import { Link } from "react-router-dom";

const BooksPage: React.FC = () => {
  const [q, setQ] = useState("");

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Books</h2>
        <div style={{ display: "flex", gap: 8 }}>
          <Link to="/analytics">Analytics</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>

      <div style={{ marginTop: 12 }}>
        <BookForm />
      </div>

      <div style={{ marginTop: 12 }}>
        <BookSearch value={q} onChange={setQ} />
        <BookList searchTerm={q} />
      </div>
    </div>
  );
};

export default BooksPage;

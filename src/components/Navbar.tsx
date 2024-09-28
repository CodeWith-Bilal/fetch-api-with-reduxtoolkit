import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ fontWeight: 700, fontSize: 18 }}>API Toolkit Demo</div>
          <nav style={{ display: "flex", gap: 10 }}>
            <Link to="/" style={{ color: "#0f172a", textDecoration: "none" }}>
              Home
            </Link>
            <Link
              to="/posts"
              style={{ color: "#0f172a", textDecoration: "none" }}
            >
              Posts
            </Link>
            <Link
              to="/weather"
              style={{ color: "#0f172a", textDecoration: "none" }}
            >
              Weather
            </Link>
            <Link
              to="/github"
              style={{ color: "#0f172a", textDecoration: "none" }}
            >
              GitHub
            </Link>
            <Link
              to="/dashboard"
              style={{ color: "#0f172a", textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </nav>
        </div>
        <div>
          <button
            style={{
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid #e2e8f0",
            }}
          >
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

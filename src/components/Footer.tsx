import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid #edf2f7",
        marginTop: 24,
        padding: "16px 0",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          padding: "0 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ color: "#64748b" }}>
          © {new Date().getFullYear()} BookStore Demo
        </div>
        <div style={{ color: "#94a3b8" }}>Built with Redux Toolkit • Demo</div>
      </div>
    </footer>
  );
};

export default Footer;

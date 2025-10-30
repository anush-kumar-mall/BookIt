import React, { useState } from "react";

interface NavbarProps {
  onSearch?: (query: string) => void; // ✅ optional
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const trimmed = query.trim();
    if (trimmed && onSearch) {
      onSearch(trimmed);
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 40px",
        backgroundColor: "#ffffff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left: Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/images/logo.png" // ✅ direct path (no import)
          alt="Cookit Logo"
          style={{ height: "35px", width: "auto" }}
        />
      </div>

      {/* Right: Search bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #dcdcdc",
          borderRadius: "6px",
          overflow: "hidden",
          backgroundColor: "#f9f9f9",
        }}
      >
        <input
          type="text"
          placeholder="Search experiences"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          style={{
            padding: "8px 12px",
            border: "none",
            outline: "none",
            width: "240px",
            fontSize: "14px",
            backgroundColor: "transparent",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            backgroundColor: "#FFD500",
            border: "none",
            padding: "8px 16px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#000",
          }}
        >
          Search
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

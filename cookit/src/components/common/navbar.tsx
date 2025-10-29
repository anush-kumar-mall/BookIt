import React from "react";

const Navbar: React.FC = () => {
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
          src="https://highwaydelite.com/assets/images/highwaydeliteLogo.png"
          alt="Highway Delite"
          style={{
            height: "35px",
            width: "auto",
          }}
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
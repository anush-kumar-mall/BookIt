import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  onSearch?: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmed = query.trim();
    if (!trimmed) return;
    if (onSearch) {
      onSearch(trimmed);
    } else {
      navigate(`/?search=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <nav
        className="navbar"
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
          flexWrap: "wrap",
        }}
      >
        {/* Left: Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            flexShrink: 0,
          }}
          onClick={() => navigate("/")}
        >
          <img
            src="/images/logo.png"
            alt="Cookit Logo"
            style={{
              height: "55px",
              width: "auto",
              marginLeft: "35px",
              transition: "all 0.3s ease",
            }}
            className="navbar-logo"
          />
        </div>

        {/* Right: Search bar */}
        <div
          className="navbar-search"
          style={{
            display: "flex",
            alignItems: "center",
            border: "1px solid #dcdcdc",
            borderRadius: "6px",
            overflow: "hidden",
            backgroundColor: "#f9f9f9",
            marginRight: "45px",
            transition: "all 0.3s ease",
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

      {/* ✅ Responsive fixes */}
      <style>
        {`
          /* Medium screens */
          @media (max-width: 768px) {
            .navbar-logo {
              margin-left: 20px !important;
              height: 32px !important;
            }

            .navbar-search {
              margin-right: 20px !important;
            }
          }

          /* Small screens */
          @media (max-width: 550px) {
            .navbar {
              flex-direction: column !important;
              align-items: center !important;
              padding: 12px 20px !important;
            }

            .navbar-logo {
              margin-left: 0 !important;
              margin-bottom: 10px !important;
              height: 30px !important;
            }

            .navbar-search {
              margin: 0 !important;
              width: 100% !important;
              max-width: 90% !important;
              justify-content: space-between !important;
            }

            .navbar-search input {
              width: 100% !important;
              font-size: 13px !important;
            }

            .navbar-search button {
              padding: 8px 12px !important;
              font-size: 13px !important;
              white-space: nowrap !important;
            }
          }

          /* Extra small screens */
          @media (max-width: 400px) {
            .navbar-search {
              flex-direction: column !important;
              align-items: stretch !important;
              border-radius: 8px !important;
            }

            .navbar-search input {
              width: 100% !important;
              border-bottom: 1px solid #dcdcdc !important;
            }

            .navbar-search button {
              width: 100% !important;
              margin-top: 5px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;

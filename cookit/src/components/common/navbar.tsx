import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Experience {
  _id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  location: string;
}

interface NavbarProps {
  onSearch?: (query: string) => void; // optional, for homepage use
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Experience[]>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async () => {
    const trimmed = query.trim();
    if (!trimmed) return;

    try {
      // ✅ fetch search results directly from backend
      const res = await axios.get(
        `http://localhost:5000/api/experiences?search=${encodeURIComponent(trimmed)}`
      );
      setResults(res.data);
      setShowResults(true);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };

  const handleResultClick = (id: string) => {
    setShowResults(false);
    setQuery("");
    navigate(`/experience/${id}`);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* NAVBAR */}
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
        <div
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img
            src="/images/logo.png"
            alt="Cookit Logo"
            style={{ height: "35px", width: "auto" , marginLeft: "35px" }}
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
            marginRight: "45px"
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

      {/* ✅ Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "40px",
            width: "300px",
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            zIndex: 1001,
            maxHeight: "400px",
            overflowY: "auto",
          }}
        >
          {results.map((item) => (
            <div
              key={item._id}
              onClick={() => handleResultClick(item._id)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget.style.backgroundColor = "#f9f9f9"))
              }
              onMouseLeave={(e) =>
                ((e.currentTarget.style.backgroundColor = "white"))
              }
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "6px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#333",
                    marginBottom: "2px",
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#666",
                  }}
                >
                  ₹{item.price} • {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

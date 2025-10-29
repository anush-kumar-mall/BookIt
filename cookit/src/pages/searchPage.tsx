import React, { useState } from "react";
import Navbar from "../components/common/navbar";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("Kayak");

  const results = [
    {
      id: 1,
      title: "Kayaking",
      location: "Udupi",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Kayaking",
      location: "Udupi, Karnataka",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Kayaking",
      location: "Udupi",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Search Results */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "30px 16px",
        }}
      >
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "16px",
            color: "#111827",
          }}
        >
          Search Results for “{query}”
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {results.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
                transition: "transform 0.2s ease",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "12px" }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#6b7280",
                    marginBottom: "8px",
                  }}
                >
                  {item.location}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#374151",
                    marginBottom: "10px",
                  }}
                >
                  Curated small group experience. Certified guides. Safety first
                  with gear included.
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#111827",
                      fontSize: "0.95rem",
                    }}
                  >
                    From {item.price}
                  </span>
                  <button
                    style={{
                      backgroundColor: "#FFD500",
                      color: "#000",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      padding: "6px 12px",
                      borderRadius: "4px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
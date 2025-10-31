import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../common/Navbar";

interface Experience {
  _id: string;
  image: string;
  title: string;
  location?: string;
  price: number;
  description: string;
}

const HomePage: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Extract query from URL (so search works when redirected)
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search") || "";

  // ✅ Fetch data function
  const fetchData = async (query = "") => {
    try {
      const res = await axios.get(
        `https://bookit-1-y1x6.onrender.com/api/experiences?search=${query}`
      );
      setExperiences(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  // ✅ Fetch when searchQuery changes
  useEffect(() => {
    fetchData(searchQuery);
  }, [searchQuery]);

  // ✅ Navbar search handler — updates URL to trigger fetch
  const handleSearch = (query: string) => {
    navigate(`/?search=${encodeURIComponent(query)}`);
  };

  return (
    <div style={{ backgroundColor: "#fafafa", minHeight: "100vh" }}>
      <Navbar onSearch={handleSearch} />

      <div style={{ padding: "40px 60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "28px",
          }}
        >
          {experiences.map((exp) => (
            <div
              key={exp._id}
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                transition: "transform 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <img
                src={process.env.PUBLIC_URL + exp.image}
                alt={exp.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: "18px" }}>{exp.title}</h3>

                  {exp.location && (
                    <span
                      style={{
                        backgroundColor: "#eee",
                        color: "#333",
                        borderRadius: "6px",
                        fontSize: "12px",
                        padding: "3px 8px",
                      }}
                    >
                      {exp.location}
                    </span>
                  )}
                </div>

                <p
                  style={{
                    color: "#666",
                    marginTop: "10px",
                    fontSize: "14px",
                    minHeight: "42px",
                  }}
                >
                  {exp.description.length > 70
                    ? exp.description.slice(0, 70) + "..."
                    : exp.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "15px",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "bold", color: "#333" }}>
                    From ₹{exp.price}
                  </p>

                  <button
                    style={{
                      backgroundColor: "#FFD814",
                      border: "none",
                      borderRadius: "6px",
                      padding: "8px 16px",
                      cursor: "pointer",
                      fontWeight: 600,
                      transition: "0.2s",
                    }}
                    onClick={() => navigate(`/experience/${exp._id}`)}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#F7CA00")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#FFD814")
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Responsive padding fix */}
      <style>
        {`
          @media (max-width: 1024px) {
            div[style*="padding: 40px 60px"] {
              padding: 30px 40px !important;
            }
          }
          @media (max-width: 768px) {
            div[style*="padding: 40px 60px"] {
              padding: 20px 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;

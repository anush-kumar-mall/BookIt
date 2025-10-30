import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../common/navbar"; // ✅ apne path ke hisaab se

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

  const fetchData = async (query = "") => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/experiences?search=${query}`
      );
      setExperiences(res.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData(); // initial load
  }, []);

  const handleSearch = (query: string) => {
    fetchData(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />

      <div style={{ padding: "30px 60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {experiences.map((exp) => (
            <div
              key={exp._id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
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
              <div style={{ padding: "12px" }}>
                <h3 style={{ marginBottom: "6px" }}>{exp.title}</h3>
                {exp.location && <p style={{ margin: 0 }}>{exp.location}</p>}
                <p style={{ fontWeight: "bold", marginTop: "8px" }}>
                  From ₹{exp.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

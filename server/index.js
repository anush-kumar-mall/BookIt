require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");

// Import routes
const experienceRoutes = require("./routes/experienceRoutes");

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(cors()); // Allow frontend to call backend
app.use(express.json()); // Parse incoming JSON data

// ✅ Routes
app.use("/api/experiences", experienceRoutes);

// ✅ Root route
app.get("/", (req, res) => {
  res.send("🚀 Server is up and running — MongoDB connected ✅");
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});

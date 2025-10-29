// routes/experienceRoutes.js
const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

// ✅ GET all experiences (with optional search)
router.get("/", async (req, res) => {
  try {
    const search = req.query.search || ""; // frontend se ?search=... milta hai
    const filter = search
      ? { title: { $regex: search, $options: "i" } } // case-insensitive search
      : {};

    const experiences = await Experience.find(filter);
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

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

// ✅ GET single experience by ID
router.get("/:id", async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience)
      return res.status(404).json({ message: "Experience not found" });

    res.json(experience);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

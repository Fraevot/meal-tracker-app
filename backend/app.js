const express = require("express");
const cors = require("cors");

const mealRoutes = require("./routes/mealRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Meal Tracker API is running" });
});

// API routes
app.use("/api/meals", mealRoutes);
app.use("/api/recipes", recipeRoutes);

module.exports = app;
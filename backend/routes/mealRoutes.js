const express = require("express");
const router = express.Router();

const {
  getMeals,
  getMealById,
  createMeal,
  updateMeal,
  deleteMeal
} = require("../controllers/mealController");

// /api/meals
router.get("/", getMeals);
router.post("/", createMeal);

// /api/meals/:id
router.get("/:id", getMealById);
router.put("/:id", updateMeal);
router.delete("/:id", deleteMeal);

module.exports = router;
const Meal = require("../models/Meal");

// GET all meals
const getMeals = async (req, res) => {
  try {
    const meals = await Meal.find().sort({ date: -1 });

    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({
      message: "Error getting meals",
      error: error.message
    });
  }
};

// GET one meal by id
const getMealById = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    res.status(200).json(meal);
  } catch (error) {
    res.status(500).json({
      message: "Error getting meal",
      error: error.message
    });
  }
};

// CREATE a new meal
const createMeal = async (req, res) => {
  try {
    const meal = await Meal.create(req.body);

    res.status(201).json(meal);
  } catch (error) {
    res.status(400).json({
      message: "Error creating meal",
      error: error.message
    });
  }
};

// UPDATE a meal
const updateMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    res.status(200).json(meal);
  } catch (error) {
    res.status(400).json({
      message: "Error updating meal",
      error: error.message
    });
  }
};

// DELETE a meal
const deleteMeal = async (req, res) => {
  try {
    const meal = await Meal.findByIdAndDelete(req.params.id);

    if (!meal) {
      return res.status(404).json({ message: "Meal not found" });
    }

    res.status(200).json({
      message: "Meal deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting meal",
      error: error.message
    });
  }
};

module.exports = {
  getMeals,
  getMealById,
  createMeal,
  updateMeal,
  deleteMeal
};
const Recipe = require("../models/Recipe");

// GET all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: "Error getting recipes",
      error: error.message
    });
  }
};

// GET one recipe by id
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: "Error getting recipe",
      error: error.message
    });
  }
};

// CREATE a new recipe
const createRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.create(req.body);

    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({
      message: "Error creating recipe",
      error: error.message
    });
  }
};

// UPDATE a recipe
const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({
      message: "Error updating recipe",
      error: error.message
    });
  }
};

// DELETE a recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({
      message: "Recipe deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting recipe",
      error: error.message
    });
  }
};

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
};
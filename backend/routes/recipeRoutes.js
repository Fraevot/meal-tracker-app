const express = require("express");
const router = express.Router();

const {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require("../controllers/recipeController");

// /api/recipes
router.get("/", getRecipes);
router.post("/", createRecipe);

// /api/recipes/:id
router.get("/:id", getRecipeById);
router.put("/:id", updateRecipe);
router.delete("/:id", deleteRecipe);

module.exports = router;
const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    ingredients: {
      type: [String],
      required: true
    },

    instructions: {
      type: String,
      required: true
    },

    calories: {
      type: Number,
      min: 0
    },

    category: {
      type: String,
      enum: ["Breakfast", "Lunch", "Dinner", "Snack", "Other"],
      default: "Other"
    },

    favorite: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
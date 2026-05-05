const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      enum: ["Breakfast", "Lunch", "Dinner", "Snack"]
    },

    calories: {
      type: Number,
      required: true,
      min: 0
    },

    date: {
      type: Date,
      required: true
    },

    notes: {
      type: String,
      trim: true
    },

    plannedDay: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        ""
      ],
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Meal", mealSchema);
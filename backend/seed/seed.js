require("dotenv").config();

const mongoose = require("mongoose");
const Meal = require("../models/Meal");
const Recipe = require("../models/Recipe");

const meals = [
  {
    name: "Eggs and Toast",
    category: "Breakfast",
    calories: 350,
    date: new Date(),
    notes: "Simple breakfast meal",
    plannedDay: "Monday"
  },
  {
    name: "Chicken Rice Bowl",
    category: "Lunch",
    calories: 650,
    date: new Date(),
    notes: "High protein lunch",
    plannedDay: "Tuesday"
  },
  {
    name: "Turkey Sandwich",
    category: "Dinner",
    calories: 500,
    date: new Date(),
    notes: "Quick dinner option",
    plannedDay: "Wednesday"
  }
];

const recipes = [
  {
    title: "Protein Smoothie",
    ingredients: ["Milk", "Banana", "Protein powder", "Peanut butter"],
    instructions: "Blend all ingredients until smooth.",
    calories: 450,
    category: "Breakfast",
    favorite: true
  },
  {
    title: "Chicken Pasta",
    ingredients: ["Chicken", "Pasta", "Tomato sauce", "Parmesan"],
    instructions: "Cook pasta, cook chicken, then mix with sauce.",
    calories: 700,
    category: "Dinner",
    favorite: false
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Meal.deleteMany();
    await Recipe.deleteMany();

    await Meal.insertMany(meals);
    await Recipe.insertMany(recipes);

    console.log("Seed data added successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

seedDatabase();
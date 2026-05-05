# Meal Tracker App

## Project Summary

The Meal Tracker App is a full-stack MEAN web application that helps users log meals, track calories, organize recipes, and view saved nutrition information. Users can add, view, edit, and delete meal entries through the Angular frontend, and the data is stored in MongoDB through an Express and Node.js backend.

The purpose of this project is to create a simple meal tracking app that is easy to use and avoids being overloaded with unnecessary features.

---

## Technology Stack

### Frontend
- Angular
- TypeScript
- HTML
- CSS
- Angular Services
- HttpClient
- Observables
- Forms with `ngModel`

### Backend
- Node.js
- Express.js
- Mongoose
- REST API routes
- MVC folder structure

### Database
- MongoDB Atlas
- Mongoose schema models
- Seed data for testing

---

## Main Features

### Meals
Users can:
- View all meals
- Add a new meal
- Edit an existing meal
- Delete a meal

Meal entries include:
- Meal name
- Category
- Calories
- Date
- Planned day
- Notes

### Recipes
Users can:
- View recipes saved in MongoDB

Recipe entries include:
- Recipe title
- Ingredients
- Instructions
- Calories
- Category
- Favorite status

---

## Project Structure

```txt
meal-tracker-app/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── mealController.js
│   │   └── recipeController.js
│   │
│   ├── models/
│   │   ├── Meal.js
│   │   └── Recipe.js
│   │
│   ├── routes/
│   │   ├── mealRoutes.js
│   │   └── recipeRoutes.js
│   │
│   ├── seed/
│   │   └── seed.js
│   │
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env.example
│
├── frontend/
│   └── meal-tracker-frontend/
│       └── src/
│           └── app/
│               ├── components/
│               │   ├── meal-list/
│               │   └── recipe-list/
│               │
│               ├── models/
│               │   ├── meal.ts
│               │   └── recipe.ts
│               │
│               ├── services/
│               │   ├── meal.service.ts
│               │   └── recipe.service.ts
│               │
│               ├── app.component.html
│               ├── app.component.ts
│               └── app.config.ts
│
├── docs/
├── db/
├── README.md
└── .gitignore
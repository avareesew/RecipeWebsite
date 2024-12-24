const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Home Route
router.get("/", (req, res) => {
  res.render("home"); // Create views/home.ejs
});

// Recipes Page
router.get("/recipes", (req, res) => {
  const recipes = []; // Replace with DB query
  res.render("recipes", { recipes });
});

// // Upload Recipe
// router.post("/upload", upload.single("recipeFile"), (req, res) => {
//   const filePath = req.file.path;
//   // Add file processing logic here
//   res.redirect("/recipes");
// });

// About Page
router.get("/about", (req, res) => {
  res.render("about"); // Create views/about.ejs
});

// // Meal Planner Page
// router.get("/meal-planner", (req, res) => {
//   res.render("mealPlanner"); // Create views/mealPlanner.ejs
// });

// // Recipe Detail Page (Just an example route)
// router.get("/recipes/:id", (req, res) => {
//   const recipeId = req.params.id;
//   const recipe = {}; // Replace with DB query
//   res.render("recipeDetail", { recipe });
// });

module.exports = router; // Export the router to be used in app.js

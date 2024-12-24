const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const app = express();
const upload = multer({ dest: "uploads/" });

// Import routes from index.js
const indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Use the routes defined in index.js
app.use(indexRoutes); // This is where routes are handled

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

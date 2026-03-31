const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Test Route
app.get("/", (req, res) => {
  res.send("Blogging Platform API Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
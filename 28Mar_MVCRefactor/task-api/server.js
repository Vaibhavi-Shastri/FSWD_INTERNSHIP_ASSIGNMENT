const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

const PORT = 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("MVC Task API is running 🚀");
});

// Use Routes
app.use("/", taskRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
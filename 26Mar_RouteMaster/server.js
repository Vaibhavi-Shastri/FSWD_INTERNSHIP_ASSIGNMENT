const express = require("express");
const app = express();

const bookRoutes = require("./routes/books");
const authorRoutes = require("./routes/authors");

const PORT = 3000;

app.use(express.json());

// Routes
app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to Bookstore API");
});

// 404 Handler
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
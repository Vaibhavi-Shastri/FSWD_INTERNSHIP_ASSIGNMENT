const express = require("express");
const app = express();

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

// About Route
app.get("/about", (req, res) => {
  res.send("This is the About Page");
});

// Contact Route
app.get("/contact", (req, res) => {
  res.send("Contact us at: example@email.com");
});

// Dynamic Route
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}! Welcome to the server.`);
});

// 404 Route (for unknown paths)
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

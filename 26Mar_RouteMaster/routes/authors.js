const express = require("express");
const router = express.Router();

// Sample Data
let authors = [
  { id: 1, name: "J.K. Rowling" },
  { id: 2, name: "Paulo Coelho" }
];

// Get all authors
router.get("/", (req, res) => {
  res.json(authors);
});

// Get single author
router.get("/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.status(404).send("Author not found");
  res.json(author);
});

// Add author
router.post("/", (req, res) => {
  const newAuthor = {
    id: authors.length + 1,
    name: req.body.name
  };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

module.exports = router;
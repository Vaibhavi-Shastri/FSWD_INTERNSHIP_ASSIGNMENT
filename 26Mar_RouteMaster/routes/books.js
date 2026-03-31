const express = require("express");
const router = express.Router();

// Sample Data
let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "The Alchemist", author: "Paulo Coelho" }
];

// Get all books
router.get("/", (req, res) => {
  res.json(books);
});

// Get single book
router.get("/:id", (req, res) => {
  const book = books.find(b => b.id == req.params.id);
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});

// Add book
router.post("/", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

module.exports = router;
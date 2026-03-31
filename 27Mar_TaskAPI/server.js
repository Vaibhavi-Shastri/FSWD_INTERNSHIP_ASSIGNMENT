const express = require("express");
const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// In-memory database
let tasks = [];

/*
Task Structure:
{
  id: number,
  title: string,
  completed: boolean
}
*/

// 1. CREATE Task
app.post("/tasks", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    task: newTask
  });
});

// 2. READ All Tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// 3. READ Single Task
app.get("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// 4. UPDATE Task
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, completed } = req.body;

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.json({
    message: "Task updated successfully",
    task
  });
});

// 5. DELETE Task
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = tasks.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(index, 1);

  res.json({ message: "Task deleted successfully" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
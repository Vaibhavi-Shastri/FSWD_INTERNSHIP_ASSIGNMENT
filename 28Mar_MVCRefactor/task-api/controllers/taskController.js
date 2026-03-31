const TaskModel = require("../models/taskModel");

// CREATE
exports.createTask = (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }

  const task = TaskModel.createTask(title);

  res.status(201).json({
    message: "Task created successfully",
    task
  });
};

// READ ALL
exports.getAllTasks = (req, res) => {
  const tasks = TaskModel.getAllTasks();
  res.json(tasks);
};

// READ ONE
exports.getTaskById = (req, res) => {
  const id = Number(req.params.id);
  const task = TaskModel.getTaskById(id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

// UPDATE
exports.updateTask = (req, res) => {
  const id = Number(req.params.id);
  const updatedTask = TaskModel.updateTask(id, req.body);

  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({
    message: "Task updated successfully",
    task: updatedTask
  });
};

// DELETE
exports.deleteTask = (req, res) => {
  const id = Number(req.params.id);
  const success = TaskModel.deleteTask(id);

  if (!success) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json({ message: "Task deleted successfully" });
};
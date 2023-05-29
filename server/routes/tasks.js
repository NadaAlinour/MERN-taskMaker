const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  createTask,
  deleteTasks,
  deleteTask,
} = require("../controllers/taskController");
// GET all tasks
router.get("/", getTasks);

// GET a single task
router.get("/:id", getTask);

// POST a new task
router.post("/", createTask);

// DELETE all tasks
router.delete("/", deleteTasks);

// DELETE a task
router.delete("/:id", deleteTask);

module.exports = router;
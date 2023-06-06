const express = require("express");
const {
  getTasks,
  getTask,
  createTask,
  editTask,
  deleteTasks,
  deleteTask,
} = require("../controllers/taskController");

const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

// protecting following routes by authorization
router.use(requireAuth);

// GET all tasks
router.get("/", getTasks);

// GET a single task
router.get("/:id", getTask);

// POST a new task
router.post("/", createTask);

// PATCH a single task
router.patch("/:id", editTask);

// DELETE all tasks
router.delete("/", deleteTasks);

// DELETE a task
router.delete("/:id", deleteTask);

module.exports = router;

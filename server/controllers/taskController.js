const Task = require("../models/taskModel");
const mongoose = require("mongoose");

// get all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find({}).sort({ createdAt: -1 });
  res.status(200).json(tasks);
};

// get a single task
const getTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such task" });
  }
  const task = await Task.findById(id);

  if (!task) return res.status(404).json({ error: "no such task" });

  res.status(200).json(task);
};

const createTask = async (req, res) => {
  const { name, description } = req.body;

  // add doc to db
  try {
    const task = await Task.create({
      name,
      description,
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// edit a single task
const editTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ error: "no such task" });

  // task is the original task before patching
  const task = await Task.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  const updatedTask = await Task.findById({_id: id});

  if (!task) return res.status(400).json({ error: "no such task" });

  res.status(200).json(updatedTask); 
};

// delete all tasks (add an r u sure thingy)
const deleteTasks = async (req, res) => {
  res.json({ message: "deleting all tasks but dunno how yet" });
};

// delete a single task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "no such task" });

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) return res.status(404).json({ error: "no such task" });

  res.status(200).json(task);
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  editTask,
  deleteTasks,
  deleteTask,
};

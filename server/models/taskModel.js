const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// add isCompleted key
taskSchema.add({
  isCompleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);

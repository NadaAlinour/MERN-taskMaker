require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const tasksRoutes = require("./routes/tasks");

const app = express();

// middleware
app.use(cors());
// get access to request body
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
}) 


// connect to DB and listen for requests
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to DB and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

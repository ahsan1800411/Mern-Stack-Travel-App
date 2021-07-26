const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB Database");
  } catch (error) {
    console.error(error);
  }
};
connectDB();

const port = process.env.PORT || 8800;

app.listen(port, () => console.log(`Server is up and running on port ${port}`));

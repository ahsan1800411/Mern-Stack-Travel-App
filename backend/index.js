const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const pinRoutes = require("./routes/pins");
const userRoutes = require("./routes/users");

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Connected to mongoDB Database");
  } catch (error) {
    console.error(error);
  }
};
connectDB();

// Routes
app.use("/api/pins", pinRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 8800;

app.listen(port, () => console.log(`Server is up and running on port ${port}`));

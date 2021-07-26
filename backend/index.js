const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 8800;

app.listen(port, () => console.log(`Server is up and running on port ${port}`));

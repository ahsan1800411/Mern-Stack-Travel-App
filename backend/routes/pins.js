const router = require("express").Router();
const Pin = require("../models/Pin");

// create a new pin ==> post request ==>/api/pins/create
router.post("/create", async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// get all the pins ==> get request ==>/api/pins
router.get("/", async (req, res) => {
  const pins = await Pin.find();
  try {
    res.status(200).json(pins);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

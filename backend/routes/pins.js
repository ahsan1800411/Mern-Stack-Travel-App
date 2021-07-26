const router = require("express").Router();
const Pin = require("../models/Pin");

// create a new pin ==> post request ==>/api/pins
router.post("/", async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;

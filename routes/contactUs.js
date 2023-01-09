const path = require("path");
const express = require("express");

const router = express.Router();
const constactUsControler = require("../controllers/contactus");

router.get("/contactus", constactUsControler.getContactUs);

router.post("/contactus", constactUsControler.postContactUs);

module.exports = router;

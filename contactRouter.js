const express = require("express");
const router = express.Router();
const contact = require("./contactController");
router.post("/contact", contact.contact);
module.exports = router;

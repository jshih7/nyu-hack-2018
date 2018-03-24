"use strict";

const express = require("express");
const router = express.Router();

router.route("/")
.get(function(req, res) {
   res.send("GET route on things.");
})
.post(function(req, res) {
   res.send("POST route on things.");
});

module.exports = router;

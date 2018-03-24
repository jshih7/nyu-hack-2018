"use strict";

const express = require("express");
const router = express.Router();

// Home page 
router.route("/")
.all(function(req, res, next) {
    console.log("Redirecting to login");
    res.redirect("/login");
});

// Login page
router.route("/login")
.get(function(req, res) {
    res.render("login");
})
.post(function(req, res) {
   res.send("POST route on things.");
});

module.exports = router;

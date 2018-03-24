"use strict";

const express = require("express");
const router = express.Router();

// Home page 
router.route("/")
.all(function(req, res, next) {
    res.redirect("/login");
});

// Login page
router.route("/login")
.get(function(req, res) {
    res.render("login");
})
.post(function(req, res) {
    const login = {
        username: req.body.username,
        password: req.body.password
    };
    res.send(login);
});

module.exports = router;

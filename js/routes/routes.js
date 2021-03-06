"use strict";

const fs = require("fs");
const path = require("path");
const express = require("express");
const Sequelize = require("sequelize");
const { or, and } = Sequelize.Op;

const database = "ReAction";
const username = "reaction";
const password = "nyuhack2018";
const options = {
	host: "localhost",
	dialect: "mysql",
	directory: path.join(__dirname, "js/models"), // where to put models
    operatorsAliases: false, // remove warnings
}
const sequelize = new Sequelize(database, username, password, options);

// Load all database models generated by sequelize-auto
const modelPath = path.join(__dirname, "../models");
const modelFiles = fs.readdirSync(modelPath);
modelFiles.forEach(function(modelFileName) {
    // models stored in sequelize.models Object
    sequelize.import(path.join(modelPath, modelFileName));
});

// All database models
const Users = sequelize.models.Users;
if (!sequelize.models || !Users) {
    console.log("ERROR: Missing Sequelize models");
}

const router = express.Router();

// Home page 
router.route("/")
// doesn't work with checkUserAuth, but we don't need it
.all(function(req, res, next) {
    res.sendFile(path.join(__dirname, "../public/startbootstrap-new-age-gh-pages/index.html"));
});

// Login page
router.route("/login")
.get(checkUserAuth, function(req, res) {
    res.render("login.pug");
})
.post(function(req, res) {
    // Return 400 bad request if fields are missing
    // ex. request through curl rather than HTML form
    if (!req.body.username || !req.body.password) {
        res.status("400");
        res.send("Bad request");
    } else {
        Users.findOne({
            where: {
                user: req.body.username,
                pass: req.body.password,
            }
        })
        .then(function(results) {
            if(results) {
                //res.send("Login successful! Welcome back " + results.dataValues.fname + "!")
                const user = results.dataValues;
                createUserSession(req.session, user);
                res.redirect("/dashboard");
            } else {
                res.render("login.pug", {
                    error: "Invalid login username or password.",
                });
            }
        });
    }
});

// Register page
router.route("/register")
.get(checkUserAuth, function(req, res) {
    res.render("register.pug");
})
.post(function(req, res) {
    // Return 400 bad request if fields are missing
    // ex. request through curl rather than HTML form
    if (!req.body.username || !req.body.password
        || !req.body.email || !req.body.phone
        || !req.body.phone || !req.body.email) {
        res.status("400");
        res.send("Bad request");
    } else {
        // Check if user or e-mail already exists
        Users.findOne({
            where: {
                [or]: {
                    user: req.body.username,
                    email: req.body.email,
                }
            }
        })
        .then(function(results) {
            if(!results) {
                // TODO: generate password hash
                const newUser = {
                    utype: req.body.usertype,
                    user: req.body.username,
                    pass: req.body.password,
                    fname: req.body.firstname,
                    lname: req.body.lastname,
                    phone: req.body.phone,
                    email: req.body.email,
                    regtime: sequelize.fn("NOW"),
                };
                return Users.create(newUser)
                .then(function(results) {
                    //res.send("Registration successful as a " + results.dataValues.utype + "! Hello " + results.dataValues.fname + "!");
                    const user = results.dataValues;
                    createUserSession(req.session, user);
                    res.redirect("/dashboard");
                });
            } else {
                res.render('register.pug', {
                    error: "Username/e-mail is already taken.",
                });
            }
        })
        .catch(function(err) {
            console.log("ERROR with HTTP request to /register: ", err);
        });
    }
});

// Dashboard page
router.route("/dashboard")
.get(confirmUserSession, function(req, res) {
    res.render("dashboard.pug", {
        user: req.session.user,
    });
})
.post(function(req, res) {
});

// Progress page for donors
router.route("/progress")
.get(checkBadRequestVolunteers, function(req, res) {
    res.render("progress.ejs", {
        user: req.session.user,
    });
})

// Event page for donors
router.route("/progress/haiti")
.get(checkBadRequestVolunteers, function(req, res) {
    res.render("event.ejs", {
        user: req.session.user,
    });
})

// 404 not found for all other pages
router.route("/*")
.all(function(req, res) {
    res.status(404).send("Not found");
});

// Functions

// Create new session for signed up / logged in users
function createUserSession(session, user) {
    if (!session.user) {
        session.user = {
            user: user.user,
            utype: user.utype,
            fname: user.fname,
            lname: user.lname,
        };
    }
}

// Redirect to dashboard if already logged in
function checkUserAuth(req, res, next) {
    if (req.session && req.session.user) {
        res.redirect("/dashboard");
    } else {
        next();
    }
}

// Redirect to login page if user logged out
function confirmUserSession(req, res, next) {
    if (!req.session || !req.session.user) {
        res.redirect("/login");
    } else {
        next();
    }
}

// Send a 404 not found to guest end users accessing certain pages 
function checkBadRequest(req, res, next) {
    if (!req.session || !req.session.user) {
        res.status(404).send("Not found");
    } else {
        next();
    }
}

// Send a 404 not found to donors accessing volunteer pages
function checkBadRequestDonors(req, res, next) {
    if (!req.session || !req.session.user
        || req.session.user.utype === "donor") {
        res.status(404).send("Not found");
    } else {
        next();
    }
}

// Send a 404 not found to volunteers accessing donor pages
function checkBadRequestVolunteers(req, res, next) {
    if (!req.session || !req.session.user
        || req.session.user.utype === "volunteer") {
        res.status(404).send("Not found");
    } else {
        next();
    }
}

module.exports = router;

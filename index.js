// Important node modules
const path = require("path");
const express = require("express");

// Node modules for express
const bodyParser = require("body-parser");
const session = require("express-session");
 
// Paths for local modules / files
const jsPath = path.join(__dirname, "js");
const libsPath = path.join(jsPath, "libs");
const modelsPath = path.join(jsPath, "models");
const publicPath = path.join(jsPath, "public");
const routesPath = path.join(jsPath, "routes");
const viewsPath = path.join(jsPath, "views");

// Local modules
const routes = require(path.join(routesPath, "routes"));

// Express app
const app = express(); 
const port = process.env.PORT || 3000;

// Local variables, persisting through the app
app.locals.siteName = "Re-Action";

// Template settings
app.set("view engine", "pug");
app.set("views", viewsPath);

// Enable static files
// For landing page, why doesn't it work if we just use "public"?
app.use(express.static(path.join(publicPath, "startbootstrap-new-age-gh-pages")));

// Middleware (to deal with res/req objects)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: "nyuhack2018-session",
    resave: false, // default
    saveUninitialized: false, // false helps with logins
    cookie: {
        name: "nyuhack2018-cookie",
        //secure: true, // for testing, turn this off or cookie won't be created
        maxAge: 30 * 60 * 1000, // 30 min
    },
}));

// Routes initialization
// Must do this AFTER defining all configs or they won't work
app.use(routes);

// Start server 
app.listen(port, function() {
    console.log("Server listening on http://localhost:%d...", port); 
});

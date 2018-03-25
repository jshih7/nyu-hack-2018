// Node modules
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
 
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

// Routes initialization
// Must do this AFTER defining all configs or they won't work
app.use(routes);

// Start server 
app.listen(port, function() {
    console.log("Server listening on http://localhost:%d...", port); 
});

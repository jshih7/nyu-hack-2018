// Node modules
const path = require("path");
const express = require("express");
 
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

// Routes initialization
app.use(routes);

// Template settings
app.set("view engine", "pug");
app.set("views", viewsPath);

// Start server 
app.listen(port, function() {
    console.log("Server listening on http://localhost:%d...", port); 
});

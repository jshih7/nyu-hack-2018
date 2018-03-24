const path = require("path");
const SequelizeAuto = require("sequelize-auto");

const database = "ReAction";
const username = "reaction";
const password = "nyuhack2018";
const options = {
	host: "localhost",
    dialect: "mysql",
    directory: path.join(__dirname, "js/models"), // where to put models
}

const auto = new SequelizeAuto(database, username, password, options);

auto.run(function(err) {
    if (err) {
        console.log("ERROR in generate-models: ", err);
    }
});

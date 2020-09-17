const route = require("express").Router()
const users = require("./routes/users");
const register = require("./routes/Auth");
const home = require("./routes/Home");

route.use("/register", register)
route.use("/users", users);
route.use("/home", home);

module.exports = route;

const route = require("express").Router()
const users = require("./routes/users");
const register = require("./routes/Auth");

route.use("/register", register)
route.use("/users", users);

module.exports = route;


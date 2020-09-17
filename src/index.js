const route = require("express").Router()
const users = require("./routes/users");
const register = require("./routes/Auth");
const hiring = require("./routes/hiring");

route.use("/users", users);
route.use("/register", register)
route.use("/hiring", hiring);

module.exports = route;


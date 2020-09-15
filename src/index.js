const route = require("express").Router()

const register = require("./routes/Auth")
route.use("/register", register)

module.exports = route
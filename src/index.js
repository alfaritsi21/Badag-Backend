const route = require("express").Router();
const users = require("./routes/users");
const register = require("./routes/Auth");
const home = require("./routes/Home");
const hiring = require("./routes/hiring");
const skill = require("./routes/skill");
const experience = require("./routes/Experience");
const portofolio = require("./routes/Portofolio");
const company = require("./routes/Company");

route.use("/users", users);
route.use("/home", home);
route.use("/register", register);
route.use("/hiring", hiring);
route.use("/skill", skill);
route.use("/experience", experience);
route.use("/portofolio", portofolio);
route.use("/company", company);

module.exports = route;

const route = require("express").Router()
const users = require("./routes/users");
const register = require("./routes/Auth");
<<<<<<< HEAD
const home = require("./routes/Home");
=======
const hiring = require("./routes/hiring");
const skill = require("./routes/skill");
const experience = require("./routes/Experience")
const portofolio = require("./routes/Portofolio");
>>>>>>> 9446d9a12190b251378cce78a4d370ace69d6e41

route.use("/users", users);
<<<<<<< HEAD
route.use("/home", home);
=======
route.use("/register", register);
route.use("/hiring", hiring);
route.use("/skill", skill);
route.use("/experience", experience);
route.use("/portofolio", portofolio)
>>>>>>> 9446d9a12190b251378cce78a4d370ace69d6e41

module.exports = route;

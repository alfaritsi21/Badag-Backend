const router = require("express").Router();
const { authUser } = require("../middleware/Auth");

const {
  loginUser,
  loginCompany,
  userActivation,
  userCompanyActivation,
} = require("../controller/auth/login");
const { getUserid } = require("../controller/user");

const { getUserByIdRedis } = require("../middleware/Redis");

router.post("/login-user", loginUser);
router.post("/login-company", loginCompany);

router.get("/:id", authUser, getUserByIdRedis, getUserid);
router.get("/activation/:id", userActivation);
router.get("/activation-company/:id", userCompanyActivation);

module.exports = router;

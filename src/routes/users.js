const router = require("express").Router();

const { loginUser, loginCompany } = require("../controller/auth/login")

router.post("/login-user", loginUser);
router.post("/login-company", loginCompany);


module.exports = router;
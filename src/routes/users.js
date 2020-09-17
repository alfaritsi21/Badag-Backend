const router = require("express").Router();
const { authUser } = require("../middleware/Auth");

const { loginUser, loginCompany } = require("../controller/auth/login");
const { getUserid } = require("../controller/user");

const {
    getUserByIdRedis
} = require("../middleware/Redis");


router.post("/login-user", loginUser);
router.post("/login-company", loginCompany);


router.get("/:id", authUser, getUserByIdRedis, getUserid)



module.exports = router;
const router = require("express").Router();
const { authUser } = require("../middleware/Auth");

const {
  loginUser,
  loginCompany,
  userActivation,
  userCompanyActivation,
} = require("../controller/auth/login");

const {
  getUserid,
  updateImageProfile,
  updateProfile,
  resetPassword,
  resetPasswordComp,
} = require("../controller/user");

const { getUserByIdRedis, clearDataRedis } = require("../middleware/Redis");
const uploadFilter = require("../middleware/Multer");

router.post("/login-user", loginUser);
router.post("/login-company", loginCompany);

router.get("/:id", authUser, getUserByIdRedis, getUserid);
router.get("/activation/:id", userActivation);
router.get("/activation-company/:id", userCompanyActivation);

router.patch("/password/:id", resetPassword);
router.patch("/password-company/:id", resetPasswordComp);

router.patch("/profile/:id", authUser, clearDataRedis, updateProfile);
router.patch(
  "/:id",
  authUser,
  uploadFilter,
  clearDataRedis,
  updateImageProfile
);

module.exports = router;

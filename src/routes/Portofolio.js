const uploadFilter = require("../middleware/Multer");
const router = require("express").Router();
const { authUser } = require("../middleware/Auth");
const {
  addPortofolioByUserId,
  getPortofolioByUserId,
  deletePortofolio,
} = require("../controller/Portofolio");
const { clearDataRedis } = require("../middleware/Redis");

router.post("/", authUser, uploadFilter, clearDataRedis, addPortofolioByUserId);
router.get("/:id", authUser, getPortofolioByUserId);
router.delete("/:id", authUser, clearDataRedis, deletePortofolio);

module.exports = router;

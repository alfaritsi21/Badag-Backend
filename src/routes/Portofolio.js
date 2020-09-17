const uploadFilter = require("../middleware/Multer");
const router = require("express").Router()
const { authUser } = require("../middleware/Auth");
const { addPortofolioByUserId, getPortofolioByUserId, deletePortofolio } = require("../controller/Portofolio")


router.post("/", authUser, uploadFilter, addPortofolioByUserId);
router.get("/:id", authUser, getPortofolioByUserId)
router.delete("/:id", authUser, deletePortofolio)

module.exports = router;
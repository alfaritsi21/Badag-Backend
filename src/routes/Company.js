const router = require("express").Router();
const { authUser } = require("../middleware/Auth");

const { getCompanyid, updateImageProfileCompany, updateCoverCompany, updateProfileCompany } = require("../controller/Company");

const {
    getCompanyByIdRedis, clearDataRedis
} = require("../middleware/Redis");
const uploadFilter = require("../middleware/Multer");


router.patch("/cover-image/:id", authUser, uploadFilter, clearDataRedis, updateCoverCompany)
router.patch("/profile-image/:id", authUser, uploadFilter, clearDataRedis, updateImageProfileCompany)
router.patch("/profile/:id", authUser, clearDataRedis, updateProfileCompany)
router.get("/:id", authUser, getCompanyByIdRedis, getCompanyid)



module.exports = router;
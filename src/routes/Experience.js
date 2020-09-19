const router = require("express").Router()
const { authUser } = require("../middleware/Auth");
const { addExperinceByUserId, getExperienceByUserId, deleteExperience } = require("../controller/Experience");
const { clearDataRedis } = require("../middleware/Redis");


router.post("/", authUser, clearDataRedis, addExperinceByUserId);
router.get("/:id", authUser, getExperienceByUserId)
router.delete("/:id", authUser, clearDataRedis, deleteExperience)

module.exports = router;
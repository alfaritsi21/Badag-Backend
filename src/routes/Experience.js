const router = require("express").Router()
const { authUser } = require("../middleware/Auth");
const { addExperinceByUserId, getExperienceByUserId, deleteExperience } = require("../controller/Experience")


router.post("/", authUser, addExperinceByUserId);
router.get("/:id", authUser, getExperienceByUserId)
router.delete("/:id", authUser, deleteExperience)

module.exports = router;
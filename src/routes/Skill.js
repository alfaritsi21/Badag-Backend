const { addSkillByUserId, getSkillByUserId, deleteSkill } = require("../controller/Skill");
const router = require("express").Router()
const { authUser } = require("../middleware/Auth");


router.post("/", authUser, addSkillByUserId);
router.get("/:id", authUser, getSkillByUserId)
router.delete("/:id", authUser, deleteSkill)

module.exports = router;
const {
  addSkillByUserId,
  getSkillByUserId,
  deleteSkill,
} = require("../controller/Skill");
const router = require("express").Router();
const { authUser } = require("../middleware/Auth");
const { clearDataRedis } = require("../middleware/Redis");

router.post("/", authUser, clearDataRedis, addSkillByUserId);
router.get("/:id", authUser, getSkillByUserId);
router.delete("/:id/:skill", authUser, clearDataRedis, deleteSkill);

module.exports = router;

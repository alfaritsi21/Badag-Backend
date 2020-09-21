const router = require("express").Router();
const {
  get_chat_room_company,
  get_chat_room_worker,
  get_message,
  post_message,
} = require("../controller/chat/chat");
const { authUser } = require("../middleware/Auth");
const {
  get_chat_room_company_redis,
  get_chat_room_worker_redis,
  clearDataRedis,
} = require("../middleware/Redis");

router.post("/company", authUser, clearDataRedis, get_chat_room_company);
router.post("/worker", authUser, clearDataRedis, get_chat_room_worker);
router.post("/", authUser, clearDataRedis, get_message);
router.post("/send", authUser, clearDataRedis, post_message);

module.exports = router;

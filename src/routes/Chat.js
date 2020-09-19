const router = require('express').Router()
const { get_chat_room_company, get_chat_room_worker, get_message, post_message } = require('../controller/chat/chat')
const { authUser } = require("../middleware/Auth");
const { get_chat_room_company_redis, get_chat_room_worker_redis, clearDataRedis } = require('../middleware/Redis')

router.get("/company", authUser, get_chat_room_company_redis, get_chat_room_company)
router.get("/worker", authUser, get_chat_room_worker_redis, get_chat_room_worker)
router.get("/", authUser, get_message)
router.post("/", authUser, clearDataRedis, post_message)

module.exports = router
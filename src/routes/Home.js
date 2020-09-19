const router = require('express').Router()
const { get_worker } = require('../controller/home/index')
const { authUser, otorisasi } = require("../middleware/Auth");
const { get_home_redis } = require('../middleware/Redis')

router.get("/", authUser, otorisasi, get_home_redis, get_worker)

module.exports = router
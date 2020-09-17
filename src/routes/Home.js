const router = require('express').Router()
const { get_worker } = require('../controller/home/index')
const { get_home_redis } = require('../middleware/Redis')

router.get("/", get_home_redis, get_worker)

module.exports = router
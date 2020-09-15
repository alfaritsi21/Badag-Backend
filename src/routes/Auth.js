const router = require('express').Router()
const { register_worker, register_recruiter } = require('../controller/auth/Register')

router.post("/", register_worker)
router.post("/recruiter", register_recruiter)

module.exports = router
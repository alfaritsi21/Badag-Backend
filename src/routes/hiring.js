const router = require("express").Router();
const { authUser } = require("../middleware/Auth");
const { postMessageHiring } = require("../controller/hiring")

router.post("/", authUser, postMessageHiring);


module.exports = router;
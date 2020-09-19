const router = require("express").Router();
const { get_notification_worker, get_notification_recruter, read_notif_worker, read_notif_company } = require("../controller/navbar/navbar");

router.get("/worker", get_notification_worker);
router.get("/recruter", get_notification_recruter);
router.patch("/read_notif_worker", read_notif_worker);
router.patch("/read_notif_recruter", read_notif_company);

module.exports = router;

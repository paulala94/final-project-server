const router = require("express").Router()

router.use("/card", require('./card.routes'))
router.use("/auth", require('./auth.routes'))
router.use("/user", require('./user.routes'))
router.use("/upload", require('./upload.routes'))


module.exports = router
const router = require("express").Router()

router.use("/auth", require('./auth.routes'))
router.use("/card", require('./card.routes'))
router.use("/deck", require('./deck.routes'))
router.use("/user", require('./user.routes'))
router.use("/game", require('./game.routes'))

router.use("/upload", require('./upload.routes'))


module.exports = router
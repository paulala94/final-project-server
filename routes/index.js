const router = require("express").Router()

router.use("/game", require('./game.routes'))

module.exports = router
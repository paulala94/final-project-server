const router = require ("express").Router()
const User = require("./../models/User.model")
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')
const { getUser, editUser, deleteUser } = require("../controllers/user.controller")

router.get("/:_id", isAuthenticated, getUser)
router.put("/edit/:_id", editUser)
router.delete("/delete/:_id", isAuthenticated, deleteUser)

module.exports = router
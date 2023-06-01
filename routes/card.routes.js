const router = require("express").Router()
const Card = require('./../models/Card.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

const { createCard, getAllCards, editCard } = require("../controllers/card.controller")

router.post('/createCard', isAuthenticated, createCard)
router.get('/getAllCards', getAllCards)
router.put('/editCard/:_id', isAuthenticated, editCard)

module.exports = router

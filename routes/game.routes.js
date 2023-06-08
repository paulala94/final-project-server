const router = require("express").Router()
const Card = require('./../models/Card.model')
const Deck = require('./../models/Deck.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')


const { getRandomOGCard, getRandomUserCard } = require("../controllers/game.controller.js")

router.get('/getRandomOGCard', getRandomOGCard)
router.get('/getRandomUserCards/:_id', isAuthenticated, getRandomUserCard)

module.exports = router

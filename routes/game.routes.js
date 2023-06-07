const router = require("express").Router()
const Card = require('./../models/Card.model')
const Deck = require('./../models/Deck.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')


const { getRandomOGCard } = require("../controllers/game.controller.js")

router.get('/getRandomOGCard', getRandomOGCard)
// router.get('/getRandomUserCards', isAuthenticated, getRandomUserCards)

module.exports = router

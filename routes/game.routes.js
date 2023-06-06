const router = require("express").Router()
const Card = require('./../models/Card.model')
const Deck = require('./../models/Deck.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')


const { getRandomOGDeck } = require("../controllers/game.controller.js")

router.get('/getRandomOGDeck', getRandomOGDeck)
// router.get('/getRandomUserCards', isAuthenticated, getRandomUserCards)

module.exports = router

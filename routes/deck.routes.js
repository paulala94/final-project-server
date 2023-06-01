const router = require("express").Router()
const Deck = require('./../models/Deck.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')
const { createDeck, getAllDecks } = require('./../controllers/deck.controller')
// CREATE DECK
router.post('/createDeck', isAuthenticated, createDeck)

// GET ALL DECK
router.get('/getAllDecks', getAllDecks)

module.exports = router

const router = require("express").Router()
const Deck = require('./../models/Deck.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

const { createDeck, getAllDecks, getDeckInfo, editDeck } = require('./../controllers/deck.controller')

// CREATE DECK
router.post('/createDeck', isAuthenticated, createDeck)

// GET ALL DECKS
router.get('/getAllDecks',isAuthenticated, getAllDecks)

// GET ONE DECK
router.get('/getDeckInfo/:_id', isAuthenticated, getDeckInfo)

// EDIT DECK
router.put('/editDeck/:_id', isAuthenticated, editDeck)

module.exports = router

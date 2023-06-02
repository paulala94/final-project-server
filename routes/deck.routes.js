const router = require("express").Router()
const Deck = require('./../models/Deck.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

const { createDeck, getAllDecks, getDeckInfo, getDeckByOwner, editDeck, deleteDeck } = require('./../controllers/deck.controller')

// CREATE DECK
router.post('/createDeck', isAuthenticated, createDeck)

// GET ALL DECKS
router.get('/getAllDecks',isAuthenticated, getAllDecks)

// GET ONE DECK
router.get('/getDeckInfo/:_id', isAuthenticated, getDeckInfo)

// GET DECK BY OWNER
router.get('/getDeckByOwner/:_id', isAuthenticated, getDeckByOwner)

// EDIT DECK
router.put('/editDeck/:_id', isAuthenticated, editDeck)

// DELETE DECK
router.delete('/deleteDeck/:_id', isAuthenticated, deleteDeck)


module.exports = router

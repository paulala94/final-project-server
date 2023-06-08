const router = require("express").Router()
const Deck = require('./../models/Deck.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

const { createDeck, getAllDecks, getDeckInfo, getRandomizedDeckCards, getOwnerDecks, editDeck, deleteDeck } = require('./../controllers/deck.controller')

// CREATE DECK
router.post('/createDeck', isAuthenticated, createDeck)

// GET ALL DECKS
router.get('/getAllDecks',isAuthenticated, getAllDecks)

// GET ONE DECK
router.get('/getDeckInfo/:_id', isAuthenticated, getDeckInfo)

// GET DECK INFO
router.get('/getRandomizedDeckCards/:_id', isAuthenticated, getRandomizedDeckCards)


// GET DECK BY OWNER
router.get('/getOwnerDecks/:_id', isAuthenticated, getOwnerDecks)

// EDIT DECK
router.put('/editDeck/:_id', isAuthenticated, editDeck)

// DELETE DECK
router.delete('/deleteDeck/:_id', isAuthenticated, deleteDeck)


module.exports = router

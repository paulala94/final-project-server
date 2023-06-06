const router = require("express").Router()
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

const { createCard, getAllCards, getCardInfo, getOwnerCards, editCard, addCardToDeck, removeCardFromDeck, deleteCard } = require("../controllers/card.controller")

router.post('/createCard', isAuthenticated, createCard)
router.get('/getAllCards', isAuthenticated, getAllCards)
router.get('/getCardInfo/:_id', isAuthenticated, getCardInfo )
router.get('/getOwnerCards/:_id', isAuthenticated, getOwnerCards)
router.put('/editCard/:_id', isAuthenticated, editCard)
router.put('/addCardToDeck', isAuthenticated, addCardToDeck)
router.put('/removeCardFromDeck', isAuthenticated, removeCardFromDeck)
router.delete('/deleteCard/:_id', isAuthenticated, deleteCard)

module.exports = router

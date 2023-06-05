const router = require("express").Router()
const Card = require('./../models/Card.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

const { createCard, getAllCards, getCardInfo, getOwnerCards, editCard, addCardToDeck, deleteCard } = require("../controllers/card.controller")

router.post('/createCard', isAuthenticated, createCard)
router.get('/getAllCards', isAuthenticated, getAllCards)
router.get('/getCardInfo/:_id', isAuthenticated, getCardInfo )
router.get('/getOwnerCards/:_id', isAuthenticated, getOwnerCards)
router.put('/editCard/:_id', isAuthenticated, editCard)
router.put('/addCardToDeck', isAuthenticated, addCardToDeck)
router.delete('/deleteCard/:_id', isAuthenticated, deleteCard)

module.exports = router

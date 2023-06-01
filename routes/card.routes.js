const router = require("express").Router()
const Card = require('./../models/Card.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

const { createCard, getAllCards } = require("../controllers/card.controller")
// CREATE CARDS

// TODO: DESACOPLAR CONTROLADORES
router.post('/createCard', isAuthenticated, createCard)


// GET ALL CARDS
router.get('/getAllCards', getAllCards)


// EDIT CARD


module.exports = router

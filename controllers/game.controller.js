const router = require("express").Router()
const Card = require('./../models/Card.model')
const Deck = require('../models/Deck.model')


// GET ALL RANDOM CARDS FROM ORIGINAL DECK
const getRandomOGCards = (req, res, next) => {

    const { ownerId } = req.query
    
    Card
        .findById(ownerId)
        .then(response => res.json(response))
        .catch(err => next(err))
}





module.exports = {
    getRandomOGCards,
    // getRandomUserCards
}

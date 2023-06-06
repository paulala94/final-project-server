const router = require("express").Router()
const Card = require('./../models/Card.model')
const Deck = require('../models/Deck.model')


// GET ALL CARDS
const getRandomOGCards = (req, res, next) => {
    
    Card
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
}





module.exports = {
    getRandomOGCards,
    getRandomUserCards
}

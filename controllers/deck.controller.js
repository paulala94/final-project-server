const router = require("express").Router()
const Deck = require('./../models/Deck.model')

// CREATE DECKS
const createDeck = (req, res, next) => {

    const {name, description} = req.body
    const { _id: owner } = req.payload

    Deck 
        .create({ name, description, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getAllDecks = (req, res, next) => {
    
    Deck
        .find()
        .sort({name: 1})
        .then(response => res.json(response))
        .catch(err => next(err))

}

module.exports = {
    createDeck,
    getAllDecks

}
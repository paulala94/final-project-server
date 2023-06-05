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

// READ DECKS
const getAllDecks = (req, res, next) => {
    
    Deck
        .find()
        .sort({name: 1})
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getDeckInfo = (req, res, next) => {

    const { _id } = req.params

    Deck
        .findById(_id)
        .populate("owner", "username")
        .populate("cards")
        .then((deck) => {
            res.json(deck)
        })
        .catch(err => next(err))
}

const getOwnerDecks =(req, res, next) => {

    const { _id } = req.params

    Deck
        .find({owner: _id})
        .populate("cards")
        .then(response => res.json(response))
        .catch(err => next(err))

}

// UPDATE DECKS
const editDeck = (req, res, next) => {

    const { name, description, owner } = req.body
    const { _id } = req.params

    Deck
    .findByIdAndUpdate( _id,  { name, description, owner }, { new:true })
    .then((editedDeck) => {
        const { name, description, owner, _id } = editedDeck
        res.send(201).json({ editedDeck })
    })
    .catch(err => next(err))

}

// DELETE DECK
const deleteDeck = (req, res, next) => {

    const { _id } = req.params

    Deck
        .findByIdAndDelete(_id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}

module.exports = {
    createDeck,
    getAllDecks,
    getDeckInfo,
    editDeck,
    getOwnerDecks,
    deleteDeck

}
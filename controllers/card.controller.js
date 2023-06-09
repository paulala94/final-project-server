const Card = require('./../models/Card.model')
const Deck = require('../models/Deck.model')

// CREATE CARDS
const createCard = (req, res, next) => {

    const { name, genre, description } = req.body
    const { _id: owner } = req.payload

    Card
        .create({ name, genre, description, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

// GET ALL CARDS
const getAllCards = (req, res, next) => {
    
    Card
        .find()
        .sort({name: 1})
        .select({name: 1}) //---> esto hace que solo salga el name
        .then(response => res.json(response))
        .catch(err => next(err))
}

// GET CARD INFO
const getCardInfo = (req, res, next) => {

    const { _id } = req.params

    Card
        .findById(_id)
        .populate("owner", "username")
        .then((card) => {
            res.json(card)
        })
        .catch(err => next(err))
}

// GET OWNER CARDS
const getOwnerCards = (req, res, next) => {

    const { _id } = req.params

    Card
        .find({owner: _id})
        .then(response => res.json(response))
        .catch(err => next(err))

}

// EDIT CARD
const editCard = (req, res, next) => {

    const { name, genre, description, owner } = req.body
    const { _id } = req.params

    Card
        .findByIdAndUpdate( _id, {name, genre, description, owner }, { new:true })
        .then((editedCard) => {
            const { name, genre, description, owner, _id } = editedCard
            res.send(201).json({ editedCard })
        })
        .catch(err => next(err))
}

const addCardToDeck = (req, res, next) => {

    const { card_id, deck_id } = req.body

    Deck
        .findByIdAndUpdate( deck_id, {$addToSet: {cards: card_id}})
        .then((addedCard) => {
            res.json(addedCard)
        } )
        .catch(err => next(err))

}

const removeCardFromDeck = (req, res, next) => {
    
    const { card_id, deck_id } = req.body
    console.log("card_id:", card_id)
    console.log("deck_id:", deck_id)

    Deck
        .findByIdAndUpdate( deck_id, {$pull: {cards: card_id}})
        .then((removedCard) => {
            res.json(removedCard)
        } )
        .catch(err => next(err))
}

// DELETE CARD
const deleteCard = (req, res, next) => {

    const { _id } = req.params

    Card
        .findByIdAndDelete(_id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}


module.exports = {
    createCard,
    getAllCards,
    getCardInfo,
    getOwnerCards,
    editCard,
    addCardToDeck,
    removeCardFromDeck,
    deleteCard
}

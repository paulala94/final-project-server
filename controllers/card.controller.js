const router = require("express").Router()
const Card = require('./../models/Card.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

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
        //.select({name: 1}) ---> esto hace que solo salga el name
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

module.exports = {
    createCard,
    getAllCards,
    editCard
}

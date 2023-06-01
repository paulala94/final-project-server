const router = require("express").Router()
const Card = require('./../models/Card.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

// CREATE CARDS

// TODO: DESACOPLAR CONTROLADORES
router.post('/createCard', isAuthenticated, (req, res, next) => {

    const { name, genre, description } = req.body
    const { _id: owner } = req.payload

    Card
        .create({ name, genre, description, owner })
        .then(response => res.json(response))
        .catch(err => next(err))
})


// GET ALL CARDS
router.get('/getAllCards', (req, res, next) => {
    
    Card
        .find()
        .sort({name: 1})
        //.select({name: 1}) ---> esto hace que solo salga el name
        .then(response => res.json(response))
        .catch(err => next(err))
})


// EDIT CARD


module.exports = router

const router = require("express").Router()
const Card = require('./../models/Card.model')
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

// CREATE CARDS

router.post('/createCard', isAuthenticated, (req, res, next) => {

    const { name, genre, description } = req.body
    const { _id: owner } = req.payload

    Card
        .create({ name, genre, description, owner })
        .then( response => res.json(response))
        .catch(err => next(err))
})


// GET ALL CARDS
router.get('/getAllCards', (req, res, next) => {
    
    Card
    .find()
    .then(response => res.json(response))
    .catch(err => next(err))
})


// EDIT CARD


module.exports = router

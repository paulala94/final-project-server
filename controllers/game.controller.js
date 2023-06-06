const router = require("express").Router()
const Card = require('./../models/Card.model')
const Deck = require('../models/Deck.model')
const User = require('../models/User.model')


// GET ALL RANDOM CARDS FROM ORIGINAL DECK
const getRandomOGDeck = (req, res, next) => {
  
    User
    .findOne({ role: "ADMIN" })
    .then(adminUser => {
      if (!adminUser) {
        return res.status(404).json({ message: "Admin user not found." })
      }

      Deck
        .findOne({ owner: adminUser._id })
        .then(deck => {
          if (!deck) {
            return res.status(404).json({ message: "No deck found." })
          }

        //   res.json(adminUser._id)

          Card
            .find({owner: adminUser._id})
            .then(cards => {
                if (!cards || cards.length === 0) {
                    return res.sendStatus(404)
                }

                const randomIndex = Math.floor(Math.random() * cards.length)
                const randomCards = cards[randomIndex]
                res.json(randomCards)
            })
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
}





module.exports = {
    getRandomOGDeck,
    // getRandomUserCards
}

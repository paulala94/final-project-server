const router = require("express").Router()
const Card = require('./../models/Card.model')
const Deck = require('../models/Deck.model')
const User = require('../models/User.model')

// GET ALL RANDOM CARDS FROM ORIGINAL DECK
const getRandomOGCard = (req, res, next) => {
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

          Card
            .find({ owner: adminUser._id })
            .then(cards => {
              if (!cards || cards.length === 0) {
                return res.sendStatus(404)
              }
              // TODO: DESACOPLAR EN UTILS
              const randomCards = []
              while (randomCards.length < 10) {
                const randomIndex = Math.floor(Math.random() * cards.length)
                const randomCard = cards[randomIndex]
                if (!randomCards.includes(randomCard)) {
                  randomCards.push(randomCard)
                }
              }
              res.json(randomCards)
            })
            .catch(err => next(err))
        })
        .catch(err => next(err))
    })
    .catch(err => next(err))
}




const getRandomUserCard = (req, res, next) => {
    const { _id } = req.params

        Deck
        .findById(_id )
        .then(deck => {
          if (!deck) {
            return res.status(404).json({ message: "No deck found." })
          }

          Card
            .find({ owner: _id })
            .then(cards => {
              if (!cards || cards.length === 0) {
                return res.sendStatus(404)
              }
              // TODO: DESACOPLAR EN UTILS
              const randomCards = []
              while (randomCards.length < 10) {
                const randomIndex = Math.floor(Math.random() * cards.length)
                const randomCard = cards[randomIndex]
                if (!randomCards.includes(randomCard)) {
                  randomCards.push(randomCard)
                }
              }
              res.json(randomCards)
            })
            .catch(err => next(err))
        })
        .catch(err => next(err))
}

module.exports = {
  getRandomOGCard,
  getRandomUserCard
}
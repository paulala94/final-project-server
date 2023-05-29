const router = require ("express").Router()
const bcrypt = require('bcryptjs')

const User = require("./../models/User.model")
const saltRounds = 10


router.post("/signup", (req, res, next) => {

    const { email, password, username, avatar, description } = req.body
    
    if ( password.length < 3 ) {

        res.status(400).json({ message: 'La contraseña tiene que tener mínimo 3 caracteres'})
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {
            if (foundUser) {
                
                res.status(400).json({ message: 'Usuario ya existente'})
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, username })
        })
        .then((createdUser) => {
            const { email, _id, username, avatar, description } = createdUser
            const user = { email, _id, username, avatar, description }

            res.status(201).json({ user })
        })
        .catch(err => next(err))
})

module.exports = router
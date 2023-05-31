const router = require ("express").Router()
const bcrypt = require('bcryptjs')
const jwt = require ('jsonwebtoken')
const User = require("./../models/User.model")
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')
const saltRounds = 10

//signup
router.post("/signup", (req, res, next) => {

    const { email, password, username, image, description } = req.body
    
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

            return User.create({ email, password: hashedPassword, username, image,description })
        })
        .then((createdUser) => {
            const { email, _id, username, image, description } = createdUser
            const user = { email, _id, username, image, description }

            res.status(201).json({ user })
        })
        .catch(err => next(err))
})


//login
router.post("/login", (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({message:"Inserta email y contraseña"})
        return
    }

    User
        .findOne({email})
        .then((foundUser) => {
            if(!foundUser) {
                res.status(401).json({ message: 'Usuario no encontrado'})
                return
            }
            if(bcrypt.compareSync(password, foundUser.password)) {
                const { _id, email, username, image, description } = foundUser
                const payload = { _id, email, username,image, description }
                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    {algorithm:'HS256', expiresIn:'6h'}
                )
                res.json({authToken:authToken})
            }
            else{
                res.status(401).json({ message: 'Incapaz de autentificar el user'})
            }
        })
        .catch(err => next(err))
})

router.get('/verify', isAuthenticated, (req, res, next) => {

    console.log(req.payload)

    res.status(200).json(req.payload)
})


module.exports = router
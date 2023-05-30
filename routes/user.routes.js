const router = require ("express").Router()
const User = require("./../models/User.model")
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')



//get user

router.get("/getUser/:_id", isAuthenticated, (req, res, next) => {
    const {_id} = req.params

    User
    .findById(_id)
    .then((findUser) => {
        res.json(findUser)
    })
     .catch(err => next(err))
})



//edit user

router.put("/edit/:_id", isAuthenticated, (req, res, next) => {

    const { username, image, description } = req.body
    const {_id} = req.params

    console.log(_id, req.body)

    User
    .findByIdAndUpdate(_id, { username, image, description }, {new:true})
    .then((editedUser) => {
            const { email, _id, username, image, description } = editedUser

            res.status(201).json({ editedUser })
        })
    .catch(err => next(err))

})





module.exports = router
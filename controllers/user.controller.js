const router = require ("express").Router()
const User = require("./../models/User.model")
const { isAuthenticated } = require('./../middlewares/verifyToken.middleware')

//get user

const getUser =  (req, res, next) => {

    const {_id} = req.params

    User
        .findById(_id)
        .then((user) => {
            res.json(user)
        })
        .catch(err => next(err))
}

//edit user

const editUser =( req, res, next) => {  

    const { username, image, description } = req.body
    const { _id } = req.params

    User
        .findByIdAndUpdate(_id, { username, image, description }, {new:true})
        .then((editedUser) => {
            const { email, _id, username, image, description } = editedUser
            res.send(201).json({ editedUser })
        })
        .catch(err => next(err))

}


//delete user

const deleteUser = (req, res,next) => { 

    const { _id } = req.params

    User
        .findByIdAndDelete(_id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}





module.exports = {
    getUser,
    editUser,
    deleteUser
}
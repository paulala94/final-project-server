const router = require('express').Router()

const { uploadImage } = require('../controllers/upload.controller')
const uploaderMiddleware = require('../middlewares/uploader.middleware')

// const uploader = require('./../middleware/cloudinary.middleware')



router.post('/image', uploaderMiddleware.single('image'), uploadImage)


module.exports = router


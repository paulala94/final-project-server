const router = require('express').Router()

const uploaderMiddleware = require('../middlewares/uploader.middleware')

// const uploader = require('./../middleware/cloudinary.middleware')

router.post('/image', uploaderMiddleware.single('image'), (req, res) => {
console.log('ruta------', req.file.path)
  if (!req.file) {
    res.sendStatus(500)
    // .json({ errorMessage: 'Error caragndo el archivo' })
    return
  }

  res.json({ cloudinary_url: req.file.path })
})


module.exports = router


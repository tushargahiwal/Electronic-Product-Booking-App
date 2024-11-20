const {addImage,getImage,deleteImage,updateImage } = require ('./imagecontroller')

const express = require('express');

const Controller = require('./imagecontroller')

const route = express.Router()

// multer file
const {photoUpload} = require('./UploadFiles')

route.post('/addimage',photoUpload, addImage) 

route.get('/findimage',getImage) 

route.delete('/deleteImage/:_id',deleteImage)

route.put('/updateimage/:_id', photoUpload,updateImage)

module.exports= route
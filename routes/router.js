const express=require('express')
const { userRegister, userLogin, uploadImage, getImages, getSingleImage, deleteImage,updateImage } = require('../controllers/logic')
const router=new express.Router()


router.post('/user-register',userRegister)

router.post('/user-login',userLogin)

router.post('/upload-image',uploadImage)

router.get('/image-access/:userId',getImages)

router.get('/single-image/:_id',getSingleImage)

router.delete('/image-delete/:_id',deleteImage)

router.put('/update-image/:_id',updateImage)


module.exports=router
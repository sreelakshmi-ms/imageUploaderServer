const { users,images } = require("../models/collection")



const userRegister = (req, res) => {
    const { email,psw } = req.body
    users.findOne({ email }).then(user => {
        if (user) {
            res.status(404).json({
                message: "User already exist",
                status: false,
                statusCode: 404
            })
        }
        else {
            newUser = new users({ email,psw})
            newUser.save()
            res.status(200).json({
                message: "User Registered Succesfully",
                status: true,
                statusCode: 200
            })
        }
    })
}



userLogin = (req, res) => {
    const { email, psw } = req.body
    users.findOne({ email, psw }).then(user => {
        if (user) {
            res.status(200).json({
                message: "Login succesful",
                status: true,
                statusCode: 200,
                _id: user._id
            })
        }
        else {
            res.status(404).json({
                message: "Incorrect email or password",
                status: false,
                statusCode: 404
            })

        }
    })
}


uploadImage=(req,res)=>{
    const{title,url,desc,userId}=req.body
    newImage=new images({title,url,desc,userId})
    newImage.save()
    res.status(200).json({
        message: "Image Uploaded Succesfully",
        status: true,
        statusCode: 200
    })
}

const getImages = (req, res) => {
    const {userId}=req.params
    images.find({userId}).then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}


const getSingleImage = (req, res) => {
    const {_id}=req.params
    images.findOne({_id}).then(data => {
        if (data) {
            res.status(200).json({
                message: data,
                status: true,
                statusCode: 200
            })
        }
    })
}


const deleteImage = (req, res) => {
    const { _id } = req.params
    images.deleteOne({ _id }).then(data => {
        res.status(200).json({
            message: "Product deleted",
            status: true,
            statusCode: 200
        })
    })

}


const updateImage = (req, res) => {
    const { _id } = req.params
    const { title,url,desc } = req.body
    images.findOne({ _id }).then(pdata => {
        if (pdata) {
            pdata.title = title
            pdata.desc = desc
            pdata.url = url
            pdata.save()

            res.status(200).json({
                message: "Image updated",
                status: true,
                statusCode: 200
            })
        }
    })

}


module.exports={userLogin,userRegister,uploadImage,getImages,getSingleImage,deleteImage,updateImage}
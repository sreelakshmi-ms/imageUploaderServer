const mongoose=require("mongoose")

const usersSchema=new mongoose.Schema({
    email:String,
    psw:String
})
const users=new mongoose.model("users",usersSchema)

const imagesSchema=new mongoose.Schema({
    userId:String,
    title:String,
    url:String,
    desc:String
})
const images=new mongoose.model("images",imagesSchema)


module.exports={users,images}
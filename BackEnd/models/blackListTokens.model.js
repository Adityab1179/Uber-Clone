const mongoose=require("mongoose")
const blackListToken=mongoose.Schema({
    token:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true,
        expires:86400
    }
})
module.exports=mongoose.model('blockedToken',blackListToken)
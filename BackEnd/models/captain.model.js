const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const jsonwebtoken=require("jsonwebtoken")
const captainSchema=new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true,
            minLength:[3,"First Name must be of atleast length 3 "]
        },
        lastName:{
            type:String,
            required:true,
            minLength:[3,"Last Name must be of atleast length 3 "]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
        minLength:[6,"Password must be of atleast length 6"]
    },
    socketId:{
        type:String,
    },
    status:{
        type:String,
        enum:["active","inactive"],
        default:"inactive"
    },
    number:{
        type:String,
        required:true,
        unique:true
    },
    vehicle:{
        color:{
            type:String,
            required:true
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,"Capacity must be atleast 1"]
        },
        plateNumber:{
            type:String,
            required:true,
            unique:true
        },
        category:{
            type:String,
            required:true,
            enum:["car","bike","auto"]
        },
        
        
    },
    location:{
        latitude:{
            type:Number,
        },
        longitude:{
            type:Number,
        }
    }
})
captainSchema.methods.generateAuthToken=function(){
    const token=jsonwebtoken.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'24h'})
    return token
}
captainSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}
captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10)
}
module.exports=mongoose.model("Captain",captainSchema)
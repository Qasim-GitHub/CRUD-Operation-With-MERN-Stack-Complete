const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
    
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    gender:{
        type: String,
        require:true
    }
})
const userModel= new mongoose.model("Users",userSchema);
module.exports= userModel




import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    name:{
        type:String,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
    },role:{
        type:String,
        trim:true,
        lowercase:true
    }
});

const userModel = new mongoose.model('userModel',userSchema,"users");

export default userModel;
import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    date:{
        type:String,
        default:() => new Date().toLocaleDateString('en-GB')
    },
    name:{
        type:String,
        lowercase:true,
        trim:true
    },
    email:String,
    contact:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        trim:true
    }
},{
    timestamps:true
});

const customerModel = new mongoose.model('customerModel',customerSchema,'CustomersList');
export default customerModel;
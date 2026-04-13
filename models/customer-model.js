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
    },
    vehicleNumber:{
        type:String,
        trim:true,
        uppercase:true
    },
    credits:{
        type:Number,
        min:0
    },
    creditslimit:{
        type:Number,
        min:0
    }
},{
    timestamps:true
});

const customerModel = mongoose.model('customerModel',customerSchema,'CustomersList');
export default customerModel;
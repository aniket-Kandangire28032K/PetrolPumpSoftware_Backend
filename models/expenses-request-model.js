import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,trim:true
    },
    requesterName:{
        type:String,
        lowercase:true,
        required:true,
        trim:true
    },
    amount:{
        type:Number,
        required:true
    },
    notes:{
        type:String,
        required:true,trim:true
    },
    paymentMode:{
        type:String,
        required:true,
        trim:true
    },
    status:{
        type:String,
        default:"pending"
    }
},{
    collection:"expenseRequests"
})

const expenseRequestModel = new mongoose.model("expenseRequests",requestSchema)

export default expenseRequestModel;
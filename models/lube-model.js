import mongoose from "mongoose";

const lubeSchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    paymentMode:{
        type:String,
        required:true
    },
    customerName:{
        type:String,
        lowercase:true
    },
    qty:{
        type:Number,
        required:true
    },
    gst:{
        type:Number,
        required:true
    },
    perAmount:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
},{
    collection:"lubeSales"
})

const lubeModel = new mongoose.model("lubeSales",lubeSchema)

export default lubeModel;
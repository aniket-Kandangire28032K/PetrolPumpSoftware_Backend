import mongoose from "mongoose";

const Schema = mongoose.Schema({
    productName:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        // unique:true
    },
    productCompanyName:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    },
    gstPer:{
        type:Number,
    },
    netVolume:{
        type:String,
        lowercase:true,
        trim:true
    },
    productRate:Number,
    gstAmount:Number,
    totalAmount:Number,
    productStock:Number,
},{
    collection:"LubeStock"
});

const LubeStock = new mongoose.model("LubeStock",Schema);

export default LubeStock;

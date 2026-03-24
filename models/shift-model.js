import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    fuel:{
        type:String,
        lowercase:true
    },
    opening:{
        type:Number,
        min:0
    },
    closing:{
        type:Number,min:0
    },
    sale:{
        type:Number,min:0
    },
    rate:{
        type:Number,min:0
    },
    salerate:{
        type:Number,min:0
    },
    nozel:{
        type:String,
        lowercase:true
    },
},{_id:false})

const shiftSchema = new mongoose.Schema({
    date:{
        type:String
    },
    name:{
        type:String,
        lowercase:true,
    },
    cashier:{
        type:String,
        lowercase:true,
    },
    shift:{
        type:String,
        lowercase:true,
    },
    nozels:{
        type:[itemSchema],
        default:[]
    },
    total:{
        type:Number
    }
},{
    collection:"ShiftDB"
})

const shiftModel = new mongoose.model('shiftDB',shiftSchema)

export default shiftModel;
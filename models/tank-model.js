import mongoose from "mongoose";

const tankSchema =new mongoose.Schema({
    tankname:{
        type:String,
    },
    tankproduct:{
        type:String,
        uppercase:true
    },
    tankcapacity:{
        type:Number,
        min:0
    },
    tankcurrentstock:{
        type:Number
        ,min:0
    },
    tankStatus:{
        type:String
    }
},{
    collection:"TankDB"
})

const tankModel = new mongoose.model("tankmodel",tankSchema)

export default tankModel
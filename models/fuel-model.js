import mongoose from "mongoose";
const FuelSchema = new mongoose.Schema({
    name:{
        type:String,
        lowercase:true,
        trim:true
    },
    liters:{
        type:Number,
        min:0
    },
    suppliername:{
        type:String,
        trim:true,
        lowercase:true
    },
    rate:Number,
    tank:{
        type:String,
        lowercase:true,
        trim:true
    },
    lastupdatedate:{
        type:String
    }

});

const fuelmodel = mongoose.model('fuelDB',FuelSchema,"FuelDB");

export default fuelmodel;
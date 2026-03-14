import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    companyname:{
        type:String,
        lowercase:true,
        trim:true
    },
    name:{
        type:String,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    contact:{
        type:String,
        trim:true
    },
    address:{
        type:String,
        lowercase:true,
        trim:true
    },
    status:{
        type:String,
        lowercase:true,
        trim:true,
        enum:['active','inactive'],
        default:'active'
    }
})

const supplierModel = new mongoose.model('supplierModel',supplierSchema,'suppliersList');

export default supplierModel;
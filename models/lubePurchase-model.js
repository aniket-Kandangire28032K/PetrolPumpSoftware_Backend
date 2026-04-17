import mongoose from "mongoose";

const productListSchema = mongoose.Schema({
    // Product List Schema
        productName:{
            type:String,
            // required:true
        },
        productStock: { 
            type:Number,
            // required:true
        },
        perProductQty: { 
            type:Number,
            // required:true
        },
        perProductRate: { 
            type:Number,
            // required:true
        },
        gstPer: { 
            type:Number,
            // required:true
        },
        gstAmount: { 
            type:Number,
            // required:true
        },
        productTotal:{ 
            type:Number,
            // required:true
        },
},{_id:false})

const lubeSchema = mongoose.Schema({
    //  Main Schema 
    date:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true,
        trim:true
    },
    invoiceNo:{
        type:String,
        required:true,
        trim:true
    },
    invoiceDate:{
        type:String,
        trim:true
    },
    gstNo:{
       type:String,
        trim:true 
    },
    productList:{
        type:[productListSchema],
        default:[],
    },
    totalPrice:Number
},{
    collection:"lubePurchase"
});

const LubePurchaseModel = mongoose.model('lubePurchase',lubeSchema);

export default LubePurchaseModel;

import mongoose from "mongoose";

const DiptestSchema = new mongoose.Schema({
    date: String,
    product: {
        type:String,
        lowercase:true
    },
    tank: {
        type:String,
        lowercase:true
    },
    openingStock:Number,
    receiptStock: Number,
    totalStock: Number,
    actualSale: Number,
    closingStock: Number,
    productDip: Number,
    actualDioStock: Number,
    variation: Number,
    waterDip: {
        type:Number,
        default:0
    },
},{
    collection:"Diptest"
})

const DiptestModel = new mongoose.model("disptest",DiptestSchema);

export default DiptestModel;
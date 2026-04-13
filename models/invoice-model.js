import mongoose from "mongoose";
const today = new Date().toISOString().split("T")[0];

const itemSchema = new mongoose.Schema(
  {
    itemname: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    qty: {
      type: Number,
      min: 0,
      required: true,
    },
    vat:{
      type:Number,
      min:0,
      default:0
    },
    rate: {
      type: Number,
      required: true,
      min: 0,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: false },
);

const invoiceSchema = new mongoose.Schema(
  {
    date:{
      type:String,
      default:today
    },
    companyname: {
      type: String,
      lowercase: true,
      trim: true,
    },
    date: {
      type: String,
    },
    invoiceno: {
      type: String,
      trim: true,
    },
    invoicedate:{
      type:String
    },
    deliverydate:{
      type:String
    },
    challanno:{
      type:String,
      lowercase:true
    },
    challandate:{
      type:String,
      
    },
    gstno:{
      type:String,
    },
    transportname:{
      type:String,
      lowercase:true
    },
    transportercontact:{
      type:String,
    },
    transportnumber:{
      type:String,
    },
    remark:{
      type:String,
      lowercase:true
    },
    items:{
      type:[itemSchema],
      default:[]
    },
    finaltotal: {
      type: Number,
      required: true,
    },
    dlycharge:{
      type:Number,
    }
  },
  {
    timestamps: true,
  },
);

const invoiceModel =  mongoose.model('invoice',invoiceSchema,"invoices")
export default invoiceModel
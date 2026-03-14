import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  Date: {
    type: String,
    default: () => {
      new Date().toLocaleDateString("en-GB");
    },
  },
  petrolqty: Number,
  dieselqty: Number,
  powerqty: Number,

  invoice: {
    type: String,
    lowercase: true,
    trim: true,
  },
  supplier: {
    type: String,
    lowercase: true,
    trim: true,
  },
  transportername: {
    type: String,
    lowercase: true,
    trim: true,
  },
  transportercontact: {
    type: String,
    lowercase: true,
    trim: true,
  },
});

const productModel = new mongoose.model(
  "productModel",
  productSchema,
  "Products",
);
export default productModel;

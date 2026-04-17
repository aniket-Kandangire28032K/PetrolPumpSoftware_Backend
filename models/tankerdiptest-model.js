import mongoose from "mongoose";

const diptestSchema = mongoose.Schema({
  arivalStock: Number,
  arivalTime: String,
  date: String,
  departureStock: Number,
  product: String,
  productDip: Number,
  variation: Number,
  vehicalContact: String,
  vehicalNo: String,
  waterDip: Number,
},{
    collection:"TankerDipTestData"
});

const TankerDipModel = mongoose.model('TanketDipModel',diptestSchema);

export default TankerDipModel;
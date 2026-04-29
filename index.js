import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import customerrouter from './routes/customer-route.js'
import userRouter from './routes/user-route.js'
import supplierRouter from './routes/supplier-route.js'
import FuelRouter from './routes/fuel-route.js'
import StaffRouter from "./routes/staff-route.js"
import InvoiceRouter from './routes/invoice-route.js'
import ShiftRouter from "./routes/shift-router.js"
import ExpensesRouter from "./routes/expenses-route.js"
import DiptestRouter from "./routes/diptext-route.js"
import LubeRouter from "./routes/lube-router.js"
import RequestRouter from "./routes/request-route.js"
import LubePurchase from "./routes/LubePurchase-router.js"
import TankerTest from './routes/TankerDiptest-router.js'
import lubeStock from './routes/LubeStock-router.js'
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // parse JSON body

app.use('/api/customer',customerrouter);
app.use('/api/user',userRouter);
app.use('/api/supplier',supplierRouter);
app.use('/api/fuel',FuelRouter);
app.use('/api/staff',StaffRouter);
app.use('/api/invoice',InvoiceRouter);
app.use('/api/shift',ShiftRouter);
app.use('/api/diptest',DiptestRouter);
app.use('/api/expenses',ExpensesRouter);
app.use('/api/lube',LubeRouter);
app.use('/api/request',RequestRouter);
app.use('/api/lube-purchase',LubePurchase);
app.use('/api/tanker-test',TankerTest);
app.use('/api/lube-stock',lubeStock);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};


const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

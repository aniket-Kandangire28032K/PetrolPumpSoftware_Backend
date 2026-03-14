import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    date:{
        type:String
    },
    category:{
        type:String,
        lowercase:true
    },
    amount:{
        type:Number,
        min:0
    },
    paymentMode:{
        type:String,
        lowercase:true
    },
    notes:{
        type:String,
        lowercase:true
    }
},{
    collection:"ExpenseDB"
})

const ExpensModel = new mongoose.model("expensesDB",expenseSchema)

export default ExpensModel;
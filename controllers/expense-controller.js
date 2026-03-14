import ExpensModel from "../models/expenses-model.js";

export const getExpenses = async (req,res) => {
    try {
        const data = await ExpensModel.find().sort({date:-1})
        if(!data){
            return res.status(200).json({
                success:true,
                message:"Database is Empty"
            })
        }
        return res.status(200).json({
                success:true,
                message:"Expense Data Accessed",
                expenses:data
            })
        
    } catch (error) {
        return res.status(500).json({
                success:false,
                message:"Internal server error",
                error
            })
    }   
}

export const postExpenses = async (req,res) => {
    try {
        const data = req.body;
        const expenses = await ExpensModel.insertMany(data,{ordered:false})
        
        return res.status(200).json({
            success:true,
            message:"Expenses Saved",
            expenses
        })
    } catch (error) {
         return res.status(500).json({
                success:false,
                message:"Internal server error",
                error
            })        
    }    
} 
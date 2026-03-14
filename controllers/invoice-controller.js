import invoiceModel from "../models/invoice-model.js";

export const postInvoice = async (req,res) => {
    try {
        const invoiceData = req.body;
        const invoice = await invoiceModel.create(invoiceData)

        return res.status(201).json({
            success:true,
            invoice:invoice,
            message:"Invoice Added Successful"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error,
            message:"Internal Server Error"
        })
    }
}

export const getInvoices = async (req,res) => {
    try {
        const invoice = await invoiceModel.find()
        return res.status(200).json({
            success:true,
            invoice:invoice
        })
    } catch (error) {
        return res.status(200).json({
            success:false,
            message:"Internal Server Error",
            error:error
        })
    }
}
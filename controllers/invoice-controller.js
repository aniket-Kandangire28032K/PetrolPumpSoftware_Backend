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
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error
        })
    }
}

export const updateInvoice = async (req,res) => {
    try {
        const { _id, ...data} = req.body;
        const updatedInvoice = await invoiceModel.findByIdAndUpdate(_id,data,{
            new:true
        })
         if (!_id) {
      return res.status(400).json({
        success: false,
        message: "Invoice ID is required",
      });
    }
        if(!updatedInvoice) {
            return res.status(404).json({
            success:false,
            message:"Invoice Not found",
        })}
        
        return res.status(200).json({
            success:true,
            message:"Invoice Updated"
        })

        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Serer Error",
            error:error
        })
    }
}

export const deleteInvoice = async (req,res) => {
    const {id} = req.params;
    try {
        const invoice = await invoiceModel.findByIdAndDelete(id)
        if(!invoice){
            return res.status(404).json({
                success:false,
                message:"Invoice Not Found"
            })
        }
        return res.status(204).json({
            success:true,
            message:"Invoice Deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}
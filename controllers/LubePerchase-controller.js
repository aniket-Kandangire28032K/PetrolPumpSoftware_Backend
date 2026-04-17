import LubePurchaseModel from "../models/lubePurchase-model.js"

export const getInvoices = async(req,res)=>{
    try {
        const invoices= await LubePurchaseModel.find()
        if(!invoices){
            return res.status(404).json({
                message:"Invoices Not Found"
            })            
        }

        return res.status(200).json({
            success:true,
            invoices:invoices
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

export const postInvoice = async (req,res) => {
     try {
        const data = req.body;
        const savedData = await LubePurchaseModel.create(data);

        if(!savedData){
          return res.status(500).json({
                message:"Error In Database"
            })  
        }
         return res.status(201).json({
            success:true,
            message:'Invoice Saved',
        })
     } catch (error) {
        return res.status(500).json({
            success:true,
            message:"Internal Server Error"
        })
     }   
}

export const deleteInvoice = async (req,res) => {
    try {
        const id = req.params.id;
        const invoice = await LubePurchaseModel.findByIdAndDelete(id)
        if(!invoice) return res.status(404).json({
            success:false,
            message:"Invoice Not Found"
        })

        return res.status(200).json({
            success:true,
            message:"The Invoice is Deleted",
            invoice:invoice
        })
    } catch (error) {
        return res.status(500).json({
            success:true,
            message:"Internal Server Error"
        })
    }
}


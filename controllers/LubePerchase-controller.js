import mongoose from "mongoose"
import LubePurchaseModel from "../models/lubePurchase-model.js"
import LubeStock from "../models/LubeStock-model.js"

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

export const postInvoice = async (req, res) => {
  try {
    const data = req.body;

    const savedInvoice = await LubePurchaseModel.create(data);

    const stockData = data.productList.map(product => ({
      productName: product.productName,
      productCompanyName: data.companyName,
      gstPer: product.gstPer,
      netVolume: product.netVolume,
      productRate: product.perProductRate,
      gstAmount: product.gstAmount,
      productStock: product.productStock,
      totalAmount: product.productTotal,
    }));

    await LubeStock.insertMany(stockData);

    return res.status(201).json({
      success: true,
      message: "Invoice Saved",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

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


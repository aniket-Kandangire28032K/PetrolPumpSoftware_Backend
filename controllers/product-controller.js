import productModel from "../models/product-model.js";

// get products 

export const getProducts = async(req, res)=>{
    try {
        const products =await productModel.find();
        return res.status(200).json({products});
    } catch (error) {
        return res.status(500).json({
            error,
            message:"internal server error"
        })
    }
}

export const postProducts = async (req,res) => {
    try {
        const product = await productModel.create(req.body)
        return res.status(200).json({
            message:'Product created successfully',
            product:product
        })
    } catch (error) {
        return res.status(500).json({
            err:error,
            message:'Internal Server Error'
        })
    }
}
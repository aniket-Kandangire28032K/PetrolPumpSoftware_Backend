import lubeModel from "../models/lube-model.js";

export const getAllLubeSales = async (req,res) => {
    try {
        const lubes = await lubeModel.find().sort({date:-1})
        if(!lubes) return res.status(200).json({
            success:true,
            message:"No Data Found"
        })
        return res.status(200).json({
            success:true,
            lubes:lubes
        })

    } catch (error) {
         return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

export const postLubeSales = async (req,res) => {
    try {
        const data = req.body;
        const lube = await lubeModel.create(data)
        return res.status(201).json({
            success:true,
            lube:lube
        })
    } catch (error) {
         return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
} 
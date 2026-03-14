import tankModel from "../models/tank-model.js";

export const gettankdetails = async (req,res) => {
    try {
        const data= await tankModel.find();
        return res.status(200).json({
            success:true,
            tanks:data
        })
    } catch (error) {
          return res.status(200).json({
            success:false,
            error
        })
    }
    
}
export const posttankdetails = async (req,res) => {
    try {
        const data = req.body;
        const tankdetails = await tankModel.create(data)
        return res.status(201).json({
            success:true,
            message:"Details Saved",
            tankdetails
        })
    } catch (error) {
        return res.status(201).json({
            success:false,
            error
        })
    }
    
}
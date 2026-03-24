import DiptestModel from "../models/diptest-model.js";

export const getDiptests = async (req,res) => {
    try {
        const data = await DiptestModel.find().sort({date:-1})
        if(!data) {
            return res.status(200).json({
            message:"Datbase is Empty",
            success:true
        })
        }       
        return res.status(200).json({
            success:true,
            message:"Diptest Data Found",
            Diptextdata:data
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            success:false,
            error:error
        })
    }
}

export const postDiptextData = async (req,res) => {
    try {
        const diptextData = await DiptestModel.create(req.body)
        return res.status(200).json({
            success:true,
            message:"Diptest Data Found",
            Diptextdata:diptextData
        })

    } catch (error) {
         return res.status(500).json({
            message:"Internal Server Error",
            success:false,
            error:error
        })
    }

}
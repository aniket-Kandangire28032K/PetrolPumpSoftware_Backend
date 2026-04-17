import TankerDipModel from "../models/tankerdiptest-model.js";

export const getDiptest = async (req,res) => {
    try {
        const data = await TankerDipModel.find()
        if(!data) return res.status(404).json({
            success:false,
            message:"Test Data Not Found"
        })  

        return res.status(200).json({
            success:true,
            message:"Data Found",
            BackendData:data
        })

    } catch (error) {
       return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })   
    }
}
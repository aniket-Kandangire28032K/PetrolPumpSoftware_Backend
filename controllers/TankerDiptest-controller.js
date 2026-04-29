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
            message:"Internal Server Error",
            error:error.message
        })   
    }
}

export const PostDiptest = async (req,res) => {
     try {
        const body = req.body;
        if(!body){
            return res.status(400).json({
                success:false,
                message:"Data is Missing or Data is not Entered",
            })
        }
        const data = await TankerDipModel.create(body);
        return res.status(201).json({
            success:true,
            message:"Data Saved",
            backendData:data
        })
     } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error
        })
     }   
}

export const deletedTest = async (req,res) => {
    const {id} = req.params;
    try {
        const Test = await TankerDipModel.findByIdAndDelete(id);
        if(!Test){
            return res.status(404).json({
                success:false,
                message:"DipTest Not Found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"DipTest Deleted Successfuly"
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
}
import shiftModel from "../models/shift-model.js"
import StaffModel from "../models/staff-model.js";
export const getShiftData = async (req,res) => {
    try {
        const shiftData = await shiftModel.find().sort({date:-1});
        return res.status(200).json({
            suceess:true,
            shiftData:shiftData
        })
        
    } catch (error) {
        return res.status(500).json({
            suceess:false,
            error:error
        })
    }
    
}

export const postShiftData = async (req,res) => {
    try {
        const data = req.body;
        const shiftData = await shiftModel.create(data);
        const empleyee = await StaffModel.updateOne(
            {name : data.name},
            {
                $inc:{cash:Number(data.remainingAmount)}
            }
        )
        console.log(data)
        return res.status(200).json({
            success:true,
            shiftData:shiftData
        })
    } catch (error) {
        return res.status(500).json({
            suceess:false,
            error:error,
            message:"Internal Server Error"
        })
    }
}
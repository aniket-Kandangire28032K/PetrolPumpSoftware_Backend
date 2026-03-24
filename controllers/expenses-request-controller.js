import expenseRequestModel from "../models/expenses-request-model.js";
import ExpensModel from "../models/expenses-model.js";

export const getRequests = async (req,res) => {
    try {
        const requests = await expenseRequestModel.find().sort({date:-1})        

        return res.status(200).json({
            success:true,
            requests:requests
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error
        })
    }
}
export const postRequest = async (req,res) => {
    try {
        const request = req.body;
        const newRequest = await expenseRequestModel.create(request);
        if(!newRequest){
           return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        }) 
        }
        return res.status(201).json({
            success:true,
            new:newRequest
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error
        })
    }
}
export const patchRequest = async (req,res) => {
 try {
    const {id,status} = req.body;
    console.log(req.body)
    const request = await expenseRequestModel.findById(id)
    if(!request){
        return res.status(404).json({
            success:false,
            message:"Request Not found"
        })
    }
    
    const data = request.toObject();
        delete data._id;
        delete data.__v;

  if(status === 'approved'){
    await ExpensModel.create(data)
  }    
    request.status = status;
    await request.save();
     return res.status(200).json({
            success: true,
            message: "Request updated successfully",
            data: request
        });

 } catch (error) {
    return res.status(500).json({
            success: false,
            message: error.message
        });
 }   
}
export const delRequest = async (req,res) => {
    try {
        const {id} = req.body;
        const request = await expenseRequestModel.findByIdAndDelete({id:id})
        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Request not found"
            });
        }
        return res.status(201).json({
            success:true,
            message:"Request deleted successfully",
            new:request
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:error
        })
    } 
}
import LubeStock from "../models/LubeStock-model.js";

export const getStock = async (req,res) => {
    try {
        const data = await LubeStock.find().sort({companyName:1});
        if(!data){
            return res.status(404).json({
                success:false,
                message:"No Data Found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Data Found",
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

export const postStock = async (req,res) => {
    const data= req.body;
    try {
        const product = await LuberStock.findOneAndUpdate(
            {productName:data.productName,
                netVolume:data.netVolume
            },
            {$inc:{stock:data.stock},
              $setOnInsert:{
                productCompanyName:date.productCompanyName,
                gstPer:data.gstPer,
                netVolume:data.netVolume,
                productRate:data.productRate,
                gstAmount:data.gstAmount,
                totalAmount:data.totalAmount
              }         
            },
            { 
                new:true,
                upsert:true,

            }
       )
       return res.status(200).json({
      success: true,
      message: "Stock updated/created successfully",
      backendData: product,
    });

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:'Internal Server Error',
            error:error
        })
    }
}

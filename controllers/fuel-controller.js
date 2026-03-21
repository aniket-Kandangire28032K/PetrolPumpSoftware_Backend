import fuelmodel from "../models/fuel-model.js";

// Get API
export const getFuel = async (req,res) => {
    try {
        const fuelData = await fuelmodel.find();
        return res.status(200).json({fuelData})
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

// POST API
export const postFuel = async (req,res) => {
    try {
        const data = req.body;
        const fuel = await fuelmodel.create(data)
        return res.status(201).json({
            fuel,
            message:"Fuel Added to DB"
        })
    } catch (error) {
        return res.json({error})
    }   
}

// DELETE API
export const deleteFuel = async (req,res) => {
    try {
        const {id} = req.params;
        const result = await fuelmodel.findByIdAndDelete(id);

        if(!result){
            return res.status(404).json({
                message:"Fuel Not Found"
            })
        }

        return res.status(200).json({
            message:'Fuel Reomved',
            data:result
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error",
            error:error
        })
    }
}


// PUT API
export const putFuel = async (req,res) => {
    try {
        const {id} =req.params;
        const  updateFuel= await fuelmodel.findByIdAndUpdate(
            id,
            req.body,{
                new:true,
                runValidators:true
            }
        );
        if(!updateFuel){
            return res.status(404).json({
                message:"fuel Not found"
            })
        }
        return res.status(200).json({
            message:"Fuel Updated",
            data:updateFuel
        })
    } catch (error) {
        return res.status(400).json({
            message:"Intenral Server Error",
            error:error,
            id:req.param
        })
    }
    
}
export const updateRates = async (req, res) => {
  try {
    const rates = req.body; 
    const operations = Object.entries(rates).map(([name, rate]) => ({
      updateOne: {
        filter: { name },
        update: { $set: { rate:Number(rate),lastupdatedate:new Date().toISOString().split("T")[0] } },
      }
    }));

    await fuelmodel.bulkWrite(operations);

    return res.status(200).json({
      success: true,
      message: "Rates updated successfully"
    });

  } catch (error) {
   return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
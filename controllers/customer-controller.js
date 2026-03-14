import customerModel from "../models/customer-model.js";

// Get all Customers
export const getCustomers = async (req,res) => {
    try {
        const customers = await customerModel.find().sort({createdAt:-1})
        return res.status(200).json({customers,message:'Fetch Successfull'})
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const postCustomers = async (req,res) => {
    // post a customer
    try {
        const customer =await customerModel.create(req.body);
        return res.status(200).json({
            message:"Customer Saved",
            data:customer
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error",
            err:error
        })
    }
}

export const deleteCustomer = async (req, res) => {
  const { id } = req.params; // frontend will send the MongoDB _id in the URL

  try {
    // findByIdAndDelete uses _id by default
    const customer = await customerModel.findByIdAndDelete(id);

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
      });
    }

    return res.status(200).json({
      message: "Customer deleted successfully",
      data: customer,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};

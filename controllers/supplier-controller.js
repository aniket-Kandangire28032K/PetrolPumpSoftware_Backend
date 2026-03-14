import supplierModel from "../models/supplier-model.js";

export const getSuppliers = async(req,res) =>{
    try {
        const list =await supplierModel.find();
        if(!list.length){
            return res.status(200).json({message:'No Suppliers in Database',list:[]})
        }
        return res.status(200).json({list:list,message:'Suppliers Found'});
        
    } catch (error) {
        return res.status(500).json({err:error,message:'Internal error'})
    }
};

/* ---------------- CREATE SUPPLIER ---------------- */
export const createSupplier = async (req, res) => {
  try {
    const { name, email, contact, address, status } = req.body;

    if (!name || !contact) {
      return res.status(400).json({
        message: "Name and contact are required"
      });
    }

    const supplier = new supplierModel({
      name,
      email,
      contact,
      address,
      status: status || "active" // default status
    });

    const savedSupplier = await supplier.save();

    return res.status(201).json({
      data: savedSupplier,
      message: "Supplier created successfully"
    });

  } catch (error) {
    console.error("Create supplier error:", error);
    return res.status(500).json({
      error: error.message,
      message: "Internal server error"
    });
  }
};

/* ---------------- UPDATE SUPPLIER ---------------- */
export const updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedSupplier = await supplierModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedSupplier) {
      return res.status(404).json({
        message: "Supplier not found"
      });
    }

    return res.status(200).json({
      data: updatedSupplier,
      message: "Supplier updated successfully"
    });

  } catch (error) {
    console.error("Update supplier error:", error);
    return res.status(500).json({
      error: error.message,
      message: "Internal server error"
    });
  }
};

/* ---------------- DELETE SUPPLIER ---------------- */
export const deleteSupplier = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSupplier = await supplierModel.findByIdAndDelete(id);

    if (!deletedSupplier) {
      return res.status(404).json({
        message: "Supplier not found"
      });
    }

    return res.status(200).json({
      message: "Supplier deleted successfully"
    });

  } catch (error) {
    console.error("Delete supplier error:", error);
    return res.status(500).json({
      error: error.message,
      message: "Internal server error"
    });
  }
};

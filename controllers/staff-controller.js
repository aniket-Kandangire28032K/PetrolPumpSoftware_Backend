import StaffModel from "../models/staff-model.js";

export const getStaff = async (req, res) => {
  //  Fetch all Staffs
  try {
    const staff = await StaffModel.find();
    if (staff.length === 0) {
      // Zero staff in data base
      return res.status(200).json({
        success: true,
        message: "No Staff in Database",
      });
    }

    return res.status(200).json({
      success: true,
      staff,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const postStaff = async (req, res) => {
  try {
    const staff = req.body;
    const newStaff = await StaffModel.create(staff);
    return res.status(201).json({
      success: true,
      message: `${newStaff.name} is Added to Database`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error,
    });
  }
};

export const updateStaff = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;

    const updatedStaff = await StaffModel.findByIdAndUpdate(_id, updateData, {
      new: true,
    });

    if (!updatedStaff) {
      return res.status(404).json({ message: "Staff not found" });
    }

    return res.status(201).json({
      success: true,
      updatedStaff,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteStaff = async (req,res) => {
  const {id} = req.params;
  try {
    const staff = await StaffModel.findByIdAndDelete(id)
     if (!staff) {
      return res.status(404).json({
        success: false,
        message: "Staff not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Staff deleted successfully",
      data: staff
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
  
}
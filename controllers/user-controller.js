import userModel from "../models/user-model.js";
import  jwt  from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
  // get all users
  try {
    const users = await userModel.find();

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      err: error.message,
    });
  }
};

export const postUser = async (req, res) => {
  // create a user
  try {
    const user = await userModel.create(req.body);
    
    return res.status(201).json({
      message: "New User Created",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      err: error.message,
    });
  }
};
// Delete User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User Not Found" });

    return res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      err: error,
      message: "Internal Server Error",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { password, identifier } = req.body;

    const user = await userModel.findOne({
      $or:[
        {username:identifier},
        {name:identifier}
      ]
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user._id},
      process.env.Secrate_key,
      { expiresIn: "1h" },
    );
    return res.json({
      message: "Login Successful",
      token:token,
      user:{
        id:user._id,name:user.name,role:user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

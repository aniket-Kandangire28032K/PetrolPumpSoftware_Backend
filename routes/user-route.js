import e from "express";
import { getAllUsers,postUser,deleteUser,loginUser } from "../controllers/user-controller.js";

const router = e.Router();

router.get('/',getAllUsers)
router.post('/',postUser)
router.delete('/:id',deleteUser)
router.post("/login",loginUser)

export default router
import { getStaff ,postStaff,updateStaff,deleteStaff } from "../controllers/staff-controller.js";
import e from "express";

const router = e.Router();

router.get("/",getStaff);
router.post("/",postStaff)
router.patch("/",updateStaff)
router.delete("/:id",deleteStaff);

export default router;

import { getStaff ,postStaff,updateStaff } from "../controllers/staff-controller.js";
import e from "express";

const router = e.Router();

router.get("/",getStaff);
router.post("/",postStaff)
router.patch("/",updateStaff)

export default router;

import { getAllLubeSales,postLubeSales } from "../controllers/lube-controller.js";
import e from "express";

const router = e.Router();

router.get("/",getAllLubeSales);
router.post("/",postLubeSales)

export default router
